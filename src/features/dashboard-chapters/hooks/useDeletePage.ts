import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useActionPage, usePage } from '@/shared/hooks/page/usePage'
import { PageService } from '@/shared/services/page.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import type { IChapterWithPages } from '@/shared/types/chapter.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useDeletePage() {
	const { page: selectPage } = usePage()
	const { remove } = useActionPage()
	const chapterId = chapterStore(state => state.chapter?._id)

	const queryClient = useQueryClient()

	const { mutateAsync: deletePage, isPending: isDeletingPage } = useMutation({
		mutationKey: [MUTATION_KEYS.DELETE_PAGE],
		mutationFn: () => PageService.delete(selectPage?._id ?? ''),
		onSuccess: () => {
			handleToast('success', 'страница успешно удалена')
			queryClient.setQueryData(
				[QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_ID, chapterId],
				(chapter: IChapterWithPages) => ({
					...chapter,
					pages: chapter.pages.filter(
						page => page._id !== selectPage?._id
					)
				})
			)

			remove()
		},
		onError: (errors: any) => {
			handleErrors(errors)
		}
	})

	async function handleDeletePage() {
		await deletePage()
	}

	return useMemo(
		() => ({
			handleDeletePage,
			isDeletingPage
		}),
		[handleDeletePage, isDeletingPage]
	)
}
