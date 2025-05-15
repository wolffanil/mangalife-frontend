import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { MangaService } from '@/shared/services/manga.service'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetMangasPublish() {
	const [status] = useQueryState('status', { defaultValue: 'все' })

	const { data, isLoading: isLoadingMangas } = useQuery({
		queryKey: [QUERY_KEYS.MANGAS_PUBLISH],
		queryFn: () => MangaService.getForPublish(),
		staleTime: 10 * 60 * 1000,
		select: data =>
			data.map(manga => ({
				...manga,
				poster: getMediaSource(manga.poster)
			}))
	})

	const mangas =
		status !== 'все' ? data?.filter(manga => manga.status === status) : data

	return { mangas, isLoadingMangas }
}
