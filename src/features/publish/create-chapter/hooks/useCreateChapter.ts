import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError, UseFormSetValue } from 'react-hook-form'

import { USER_URL } from '@/shared/config/url.config'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useActionPage } from '@/shared/hooks/page/usePage'
import { useUploadZip } from '@/shared/hooks/useUploadZip'
import { type CreateChapterType } from '@/shared/schemas/chapter/create-chapter.schema'
import { ChapterService } from '@/shared/services/chapter.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import type { IPostChapter } from '@/shared/types/chapter.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

interface IUseCreateChapter {
	setError: UseFormSetError<CreateChapterType>
	setValue: UseFormSetValue<CreateChapterType>
	reset: UseFormReset<CreateChapterType>
}

export function useCreateChapter({
	setError,
	setValue,
	reset
}: IUseCreateChapter) {
	const params = useParams<{ mangaId: string }>()

	const { uploadZip, isLoadingUplaodZip } = useUploadZip({
		folder: 'pages',
		mangaId: params.mangaId
	})

	const setChapter = chapterStore(state => state.setChapter)
	const { remove } = useActionPage()

	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutateAsync: createChapter, isPending: isCreatingChapter } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_CHAPTER],
			mutationFn: (data: CreateChapterType) =>
				ChapterService.create({
					...data,
					manga: params.mangaId
				} as IPostChapter),
			onSuccess: chapter => {
				handleToast('success', 'глава успешно создана')
				reset()
				queryClient.refetchQueries({
					queryKey: [
						QUERY_KEYS.AUTH,
						QUERY_KEYS.CHAPTERS_BY_MANGA_Id,
						params.mangaId
					]
				})
				setChapter({ ...chapter })
				remove()
				router.push(USER_URL.dashboardChapters(params.mangaId))
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	async function handleCreateChapter(data: CreateChapterType) {
		let pagesUrl = data?.pagesUrl || []

		if (data.file?.length && !pagesUrl?.length) {
			const pagesUrls = await uploadZip(data.file)

			if (!pagesUrls) return

			pagesUrl = pagesUrls
			setValue('pagesUrl', pagesUrl)
		}

		if (!pagesUrl?.length) {
			setError('file', { message: 'Папка должна быть' })

			return
		}

		await createChapter({ ...data, pagesUrl })
		return
	}

	return useMemo(
		() => ({
			handleCreateChapter,
			isCreatingChapter: isCreatingChapter || isLoadingUplaodZip
		}),
		[handleCreateChapter, isCreatingChapter, isLoadingUplaodZip]
	)
}
