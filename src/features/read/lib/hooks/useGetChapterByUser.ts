import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useQueryState } from 'nuqs'
import { useEffect } from 'react'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ChapterService } from '@/shared/services/chapter.service'

export function useGetChapterByUser() {
	const params = useParams<{ mangaId: string }>()

	const [cn, setCn] = useQueryState('cn')

	const queryClient = useQueryClient()

	const { data: chapter, isLoading: isLoadingChapter } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_USER, params.mangaId],
		queryFn: () => ChapterService.getByUser(params.mangaId),
		staleTime: 10 * 60 * 1000
	})

	useEffect(() => {
		if (!cn && !isLoadingChapter) {
			setCn(String(chapter?.chapter.chapter ?? 1))
		}

		if (
			isLoadingChapter ||
			!chapter?.chapter?._id ||
			!chapter?.chapter?.pages?.length
		)
			return

		queryClient.setQueryData(
			[QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_ID, chapter?.chapter._id],
			{ ...chapter?.chapter }
		)
	}, [isLoadingChapter])

	return {
		chapter,
		isLoadingChapter
	}
}
