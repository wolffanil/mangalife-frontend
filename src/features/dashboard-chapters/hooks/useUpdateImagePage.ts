import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormSetError, UseFormSetValue } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useActionPage, usePage } from '@/shared/hooks/page/usePage'
import { useUploadPhoto } from '@/shared/hooks/useUploadPhoto'
import { UpdateImagePageType } from '@/shared/schemas/page/update-image-page.schema'
import { PageService } from '@/shared/services/page.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import { IChapterWithPages } from '@/shared/types/chapter.interface'
import type { IUpdateImagePage } from '@/shared/types/page.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useUpdateImagePage(
	setError: UseFormSetError<UpdateImagePageType>,
	setValue: UseFormSetValue<UpdateImagePageType>
) {
	const { page: selectPage } = usePage()
	const selectChapter = chapterStore(state => state.chapter)
	const { setPage } = useActionPage()

	const { uploadFile } = useUploadPhoto({ folder: 'page-cover' })

	const queryClient = useQueryClient()

	const { mutateAsync: updateImage, isPending: isUpdatingImage } =
		useMutation({
			mutationKey: [MUTATION_KEYS.UPDATE_IMAGE_PAGE],
			mutationFn: (data: IUpdateImagePage) =>
				PageService.updateImage(selectPage?._id ?? '', data),
			onSuccess: updatedPage => {
				handleToast('success', 'Фото обовлена')
				queryClient.setQueryData(
					[
						QUERY_KEYS.AUTH,
						QUERY_KEYS.CHAPTER_BY_ID,
						selectChapter?._id
					],
					(data: IChapterWithPages[]) =>
						data.map(chapter =>
							chapter._id === selectChapter?._id
								? chapter.pages.map(page =>
										page._id === selectPage?._id
											? {
													...page,
													image: updatedPage.image
												}
											: page
									)
								: chapter
						)
				)
				setPage({ ...updatedPage })
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	async function handleUpdateImage(data: UpdateImagePageType) {
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

		await updateImage({ image })
	}

	return useMemo(
		() => ({
			handleUpdateImage,
			isUpdatingImage
		}),
		[handleUpdateImage, isUpdatingImage]
	)
}
