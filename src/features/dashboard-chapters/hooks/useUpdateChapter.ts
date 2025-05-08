import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { UseFormSetError } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type UpdateChapterType } from '@/shared/schemas/chapter/update-chapter.schema'
import { ChapterService } from '@/shared/services/chapter.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import type { IChapter } from '@/shared/types/chapter.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useUpdateChapter(setError: UseFormSetError<UpdateChapterType>) {
	const selectChapter = chapterStore(state => state.chapter)
	const setChapter = chapterStore(state => state.setChapter)
	const params = useParams<{ mangaId: string }>()

	const queryClient = useQueryClient()

	const chapterId = selectChapter?._id ?? ''

	const { mutateAsync: updateChapter, isPending: isUpdatingChapter } =
		useMutation({
			mutationKey: [MUTATION_KEYS.UPDATE_CHAPTER],
			mutationFn: (data: UpdateChapterType) =>
				ChapterService.update(chapterId ?? '', data),
			onSuccess: updatedChapter => {
				handleToast('success', 'Глава успешно обновлена')
				queryClient.setQueryData(
					[
						QUERY_KEYS.AUTH,
						QUERY_KEYS.CHAPTERS_BY_MANGA_Id,
						params.mangaId
					],
					(data: IChapter[]) =>
						data.map(chapter =>
							chapter._id === updatedChapter._id
								? {
										...chapter,
										tom: updatedChapter.tom,
										chapter: updatedChapter.chapter,
										name: updatedChapter.name
									}
								: chapter
						)
				)

				setChapter(
					selectChapter?._id
						? {
								...selectChapter,
								tom: updatedChapter.tom,
								chapter: updatedChapter.chapter,
								name: updatedChapter.name
							}
						: updatedChapter
				)
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	async function handleUpdateChapter(data: UpdateChapterType) {
		await updateChapter(data)
	}

	return useMemo(
		() => ({
			handleUpdateChapter,
			isUpdatingChapter
		}),
		[handleUpdateChapter, isUpdatingChapter]
	)
}
