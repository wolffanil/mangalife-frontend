import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { AuthorsService } from '@/shared/services/author.service'
import { formatDate } from '@/shared/utils/get-format-date'

export function useGetAuthors() {
	const { data: authors, isLoading: isLoadingAuthors } = useQuery({
		queryKey: [QUERY_KEYS.AUTHORS],
		queryFn: () => AuthorsService.getAll(),
		staleTime: 5 * 60 * 1000,
		select: data =>
			data.map(author => ({
				...author,
				updatedAt: formatDate(author.updatedAt)
			}))
	})

	return {
		authors,
		isLoadingAuthors
	}
}
