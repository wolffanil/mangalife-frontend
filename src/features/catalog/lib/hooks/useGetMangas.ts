import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { useEffect } from 'react'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { MangaService } from '@/shared/services/manga.service'
import { IManga } from '@/shared/types/manga.interface'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetMangas(initialMangas: IManga[]) {
	const [genres] = useQueryState('genres')
	const [type] = useQueryState('type')
	const [status] = useQueryState('status')
	const [filter] = useQueryState('filter')

	const queryClient = useQueryClient()

	useEffect(() => {
		queryClient.setQueryData(
			[QUERY_KEYS.MANGAS, null, null, null],
			initialMangas
		)
	}, [initialMangas])

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
