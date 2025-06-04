import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { MangaService } from '@/shared/services/manga.service'
import type { IManga } from '@/shared/types/manga.interface'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetPopular(mangas: IManga[]) {
	const isMobile = useMediaQuery('(max-width: 500px)')

	const { data, isLoading: isLoadingPopular } = useQuery({
		queryKey: [QUERY_KEYS.POPULAR_MANGAS],
		queryFn: () => MangaService.getPopular(),
		staleTime: 10 * 60 * 1000,
		initialData: mangas,
		select: data =>
			data?.map(manga => ({
				...manga,
				poster: getMediaSource(manga.poster)
			}))
	})

	let popularMangas = isMobile ? data.slice(0, 3) : data

	return { popularMangas, isLoadingPopular }
}
