import { useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { useEffect } from 'react'

import { useGetChapters } from '@/features/dashboard-chapters/hooks/useGetChapters'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ChapterService } from '@/shared/services/chapter.service'

export function useGetCurrentChapter() {
	const { chapters, isLoadingChapters } = useGetChapters()
	const [cn] = useQueryState('cn')

	const currentChapter = chapters?.find(
		chapter => chapter.chapter.toString() === cn
	)

	const index =
		chapters?.findIndex(chapter => chapter.chapter.toString() === cn) ?? 0

	const isExistNext = chapters?.length ? chapters[index + 1] : null

	const queryClient = useQueryClient()

	useEffect(() => {
		if (isExistNext?._id) {
			queryClient.prefetchQuery({
				queryKey: [
					QUERY_KEYS.AUTH,
					QUERY_KEYS.CHAPTER_BY_ID,
					isExistNext._id
				],
				queryFn: () => ChapterService.getById(isExistNext._id),
				staleTime: 10 * 60 * 1000
			})
		}
	}, [isExistNext, chapters])

	return { isExistNext, currentChapter, isLoadingChapters }
}
