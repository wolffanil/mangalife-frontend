import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError, UseFormSetValue } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useUploadPhoto } from '@/shared/hooks/useUploadPhoto'
import { type CreateSinglePageType } from '@/shared/schemas/page/create-single-page.schema'
import { PageService } from '@/shared/services/page.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import type { IChapterWithPages } from '@/shared/types/chapter.interface'
import type { ICreateSinglePage } from '@/shared/types/page.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useCreateSinglePage(
	setError: UseFormSetError<CreateSinglePageType>,
	setValue: UseFormSetValue<CreateSinglePageType>,
	reset: UseFormReset<CreateSinglePageType>
) {
	const params = useParams<{ mangaId: string }>()
	const selectChapter = chapterStore(state => state.chapter)

	const { uploadFile } = useUploadPhoto({ folder: 'page-cover' })

	const queryClient = useQueryClient()

	const { mutateAsync: createPage, isPending: isCreatingPage } = useMutation({
		mutationKey: [MUTATION_KEYS.CREATE_PAGE],
		mutationFn: (data: ICreateSinglePage) => PageService.create(data),
		onSuccess: newPage => {
			handleToast('success', 'Страница создана')
			reset()
			queryClient.setQueryData(
				[QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_ID, selectChapter?._id],
				(chapter: IChapterWithPages) => ({
					...chapter,
					pages: [...chapter.pages, { ...newPage }]
				})
			)
		},
		onError: (errors: any) => {
			handleErrors(errors, setError)
		}
	})

	async function handleCreatePage(data: CreateSinglePageType) {
		let image = data?.image ?? ''

		if (data?.file?.length) {
			const url = await uploadFile(data.file)

			if (!url) return

			setValue('file', [])
			setValue('image', url)
			image = url
		}

		if (!image) {
			handleToast('error', 'ошибка с изображением')
			return
		}

		await createPage({
			chapter: selectChapter?._id ?? '',
			manga: params.mangaId,
			image
		})
	}

	return useMemo(
		() => ({
			handleCreatePage,
			isCreatingPage
		}),
		[handleCreatePage, isCreatingPage]
	)
}
