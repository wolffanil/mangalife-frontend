import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError, UseFormSetValue } from 'react-hook-form'

import revalidateNewMangas from '@/shared/actions/actions.mangas'
import { USER_URL } from '@/shared/config/url.config'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useUploadPhoto } from '@/shared/hooks/useUploadPhoto'
import type { TMangaForm } from '@/shared/schemas/manga/manga.schema'
import { MangaService } from '@/shared/services/manga.service'
import { IEditManga, IManga } from '@/shared/types/manga.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

import type { TActionManga } from '../manage-manga.inteface'

export function useActionManga({
	mangaId,
	type,
	reset,
	setError,
	setValue
}: {
	mangaId?: string
	type: TActionManga
	reset: UseFormReset<TMangaForm>
	setError: UseFormSetError<TMangaForm>
	setValue: UseFormSetValue<TMangaForm>
}) {
	const queryClient = useQueryClient()
	const router = useRouter()

	const { uploadFile, isLoadingUplaod } = useUploadPhoto({
		folder: 'manga-cover'
	})

	const { mutateAsync: createManga, isPending: isCreatingManga } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_MANGA],
			mutationFn: (data: IEditManga) => MangaService.create(data),
			onSuccess: manga => {
				handleToast('success', 'Манга успешно создана')
				reset()
				queryClient.refetchQueries({
					queryKey: [QUERY_KEYS.NEW_MANGAS]
				})
				queryClient.removeQueries({
					queryKey: [QUERY_KEYS.MANGAS],
					exact: false
				})
				revalidateNewMangas()
				router.push(USER_URL.createChapter(manga._id))
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	const { mutateAsync: updateManga, isPending: isUpdatingManga } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_MANGA],
			mutationFn: (data: IEditManga) =>
				MangaService.update(mangaId ?? '', data),
			onSuccess: manga => {
				handleToast('success', 'манга успешно обноалена')
				queryClient.setQueryData(
					[QUERY_KEYS.MANGA_BY_ID, mangaId],
					(data: IManga) => ({ ...data, ...manga })
				)
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	const handleManga = async (data: TMangaForm) => {
		if (isCreatingManga || isUpdatingManga) return

		let poster = data?.poster || ''
		if (data?.file?.length) {
			const url = await uploadFile(data?.file)

			if (!url) return

			//@ts-ignore
			setValue('file', [])
			setValue('poster', url)
			poster = url
		}

		if (!poster) {
			setError('file', { message: 'Обложка должна быть' })
			return
		}

		if (type === 'create') {
			//@ts-ignore
			await createManga({
				...data,
				ageLimit: Number(data.ageLimit),
				year: Number(data.year),
				poster
			})
		}

		if (type === 'edit') {
			//@ts-ignore
			await updateManga({
				...data,
				ageLimit: Number(data.ageLimit),
				year: Number(data.year),
				poster
			})
		}

		return
	}

	return useMemo(
		() => ({
			handleManga,
			isLoading: isCreatingManga || isUpdatingManga || isLoadingUplaod
		}),
		[handleManga, isCreatingManga, isUpdatingManga]
	)
}
