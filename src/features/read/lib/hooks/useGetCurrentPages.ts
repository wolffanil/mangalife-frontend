import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { useGetChapters } from '@/features/dashboard-chapters/hooks/useGetChapters'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ChapterService } from '@/shared/services/chapter.service'

export function useGetCurrentPages() {
	const [cn] = useQueryState('cn')
	const { chapters } = useGetChapters()

	const currentChapter = chapters?.find(
		chapter => chapter.chapter.toString() == cn
	)

	const { data: chapter, isLoading: isLoadingChapter } = useQuery({
		queryKey: [
			QUERY_KEYS.AUTH,
			QUERY_KEYS.CHAPTER_BY_ID,
			currentChapter?._id
		],
		queryFn: () => ChapterService.getById(currentChapter?._id ?? ''),
		enabled: !!currentChapter?._id,
		staleTime: 10 * 60 * 1000
	})

	return { chapter, isLoadingChapter }
}
