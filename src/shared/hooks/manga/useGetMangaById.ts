import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { MangaService } from '@/shared/services/manga.service'

export function useGetMangaById() {
	const { id } = useParams<{ id: string }>()

	const { data: manga, isLoading: isLoadingManga } = useQuery({
		queryKey: [QUERY_KEYS.MANGA_BY_ID, id],
		queryFn: () => MangaService.getById(id),
		enabled: !!id,
		staleTime: 5 * 60 * 1000
	})

	return {
		manga,
		isLoadingManga
	}
}
