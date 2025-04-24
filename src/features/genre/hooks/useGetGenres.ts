import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { GenresService } from '@/shared/services/genre.service'
import { formatDate } from '@/shared/utils/get-format-date'

export function useGetGenres() {
	const { data: genres, isLoading: isLoadingGenres } = useQuery({
		queryKey: [QUERY_KEYS.GENRES],
		queryFn: () => GenresService.getAll(),
		staleTime: 5 * 60 * 1000,
		select: data =>
			data.map(genre => ({
				...genre,
				updatedAt: formatDate(genre.updatedAt)
			}))
	})

	return {
		genres,
		isLoadingGenres
	}
}
