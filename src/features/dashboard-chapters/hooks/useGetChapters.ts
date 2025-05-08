import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ChapterService } from '@/shared/services/chapter.service'

export function useGetChapters() {
	const params = useParams<{ mangaId: string }>()

	const { data: chapters, isLoading: isLoadingChapters } = useQuery({
		queryKey: [
			QUERY_KEYS.AUTH,
			QUERY_KEYS.CHAPTERS_BY_MANGA_Id,
			params.mangaId
		],
		queryFn: () => ChapterService.getByMangaId(params.mangaId),
		enabled: !!params?.mangaId,
		staleTime: 5 * 60 * 1000
	})

	return { chapters, isLoadingChapters }
}
