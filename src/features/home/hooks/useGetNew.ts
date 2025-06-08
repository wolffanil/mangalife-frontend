import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { MangaService } from '@/shared/services/manga.service'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetNew() {
	const isMobile = useMediaQuery('(max-width: 500px)')

	const { data, isLoading: isLoadingNew } = useQuery({
		queryKey: [QUERY_KEYS.NEW_MANGAS],
		queryFn: () => MangaService.getNew(),
		staleTime: 10 * 60 * 1000,
		select: data =>
			data?.map(manga => ({
				...manga,
				poster: getMediaSource(manga.poster)
			}))
	})

	let newMangas = isMobile ? data?.slice(0, 3) : data

	return { newMangas, isLoadingNew }
}
