import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { MangaService } from '@/shared/services/manga.service'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetMangas() {
	const [genres] = useQueryState('genres')
	const [type] = useQueryState('type')
	const [status] = useQueryState('status')
	const [filter] = useQueryState('filter')

	const { data: mangas, isLoading: isLoadingMangas } = useQuery({
		queryKey: [
			QUERY_KEYS.MANGAS,
			!!filter && genres ? genres : null,
			!!filter && type ? type : null,
			!!filter && status ? status : null
		],
		queryFn: () =>
			MangaService.getAll(
				type || '',
				status || '',
				genres || '',
				!!filter
			),
		staleTime: 5 * 60 * 1000,

		select: data =>
			data?.map(manga => ({
				...manga,
				poster: getMediaSource(manga.poster)
			}))
	})

	return {
		mangas,
		filter,
		isLoadingMangas
	}
}
