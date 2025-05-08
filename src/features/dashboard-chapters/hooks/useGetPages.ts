import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ChapterService } from '@/shared/services/chapter.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'

export function useGetPages() {
	const selectChapter = chapterStore(state => state.chapter)

	const { data: chapter, isLoading: isLoadingChapter } = useQuery({
		queryKey: [
			QUERY_KEYS.AUTH,
			QUERY_KEYS.CHAPTER_BY_ID,
			selectChapter?._id
		],
		queryFn: () => ChapterService.getById(selectChapter?._id || ''),
		enabled: !!selectChapter?._id,
		staleTime: 5 * 60 * 1000
	})

	return {
		pages: chapter?.pages ?? [],
		isLoadingChapter
	}
}
