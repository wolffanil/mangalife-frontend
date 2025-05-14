import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { MangaService } from '@/shared/services/manga.service'
import { IMangaById } from '@/shared/types/manga.interface'

export function useGetMangaById(initialManga?: IMangaById) {
	const { id } = useParams<{ id: string }>()

	const { data: manga, isLoading: isLoadingManga } = useQuery({
		queryKey: [QUERY_KEYS.MANGA_BY_ID, id],
		queryFn: () => MangaService.getById(id),
		enabled: !!id,
		staleTime: 5 * 60 * 1000,
		initialData: initialManga?._id ? initialManga : undefined
	})

	return {
		manga,
		isLoadingManga
	}
}
