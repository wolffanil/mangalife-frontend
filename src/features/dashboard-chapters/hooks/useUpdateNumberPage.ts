import { arrayMove } from '@dnd-kit/sortable'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { PageService } from '@/shared/services/page.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import type { IChapterWithPages } from '@/shared/types/chapter.interface'
import type { IUpdateNumberPage } from '@/shared/types/page.interface'
import { handleErrors } from '@/shared/utils/handle-errors'

export function useUpdateNumberPage() {
	const queryClient = useQueryClient()
	const chapterId = chapterStore(state => state.chapter?._id)

	const { mutateAsync: updateNumber, isPending: isUpdatingNumber } =
		useMutation({
			mutationKey: [MUTATION_KEYS.UPDATE_NUMBER_PAGE],
			mutationFn: ({
				pageId,
				numberUpdate
			}: {
				pageId: string
				numberUpdate: IUpdateNumberPage
			}) => PageService.updateNumber(pageId, numberUpdate),

			onError: (errors: any) => {
				handleErrors(errors)
			}
		})

	const handleUpdateNumber = async (event: any) => {
		const { active, over } = event

		if (!over || active.id === over.id) return

		const chapter = queryClient.getQueryData([
			QUERY_KEYS.AUTH,
			QUERY_KEYS.CHAPTER_BY_ID,
			chapterId
		]) as IChapterWithPages

		const pages = chapter.pages

		const oldIndex = pages.findIndex(item => item._id === active.id)
		const newIndex = pages.findIndex(item => item._id === over.id)

		const reorderedPages = arrayMove(pages, oldIndex, newIndex).map(
			(chapter, index) => ({
				...chapter,
				number: index + 1
			})
		)

		const movedPage = reorderedPages.find(page => page._id === active.id)

		const previousPages = [...pages]

		const updatedPage = {
			id: movedPage?._id ?? '',
			newNumber: movedPage?.number ?? 0
		}

		queryClient.setQueryData(
			[QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_ID, chapterId],
			(chapter: IChapterWithPages) => ({
				...chapter,
				pages: reorderedPages
			})
		)

		await updateNumber(
			{
				pageId: updatedPage.id,
				numberUpdate: { number: updatedPage.newNumber }
			},
			{
				onError: () => {
					queryClient.setQueryData(
						[QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_ID, chapterId],
						(chapter: IChapterWithPages) => ({
							...chapter,
							pages: previousPages
						})
					)
				}
			}
		)
	}

	return useMemo(
		() => ({
			handleUpdateNumber,
			isUpdatingNumber
		}),
		[handleUpdateNumber, isUpdatingNumber]
	)
}
