import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { MangaService } from '@/shared/services/manga.service'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useSearchManga() {
	const [searchQ] = useQueryState('q')

	const { data: searchMangas, isLoading: isSearchingMangas } = useQuery({
		queryKey: [QUERY_KEYS.SEARCH_MANGAS, searchQ],
		queryFn: () => MangaService.search(searchQ ?? ''),
		enabled: !!searchQ,
		staleTime: 5 * 60 * 1000,
		select: data =>
			data?.map(manga => ({
				...manga,
				poster: getMediaSource(manga.poster),
				_id: manga.mangaId
			}))
	})

	return {
		searchQ,
		searchMangas,
		isSearchingMangas
	}
}
