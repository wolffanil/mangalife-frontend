import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ReviewService } from '@/shared/services/review.service'

export function useGetReviewByManga() {
	const params = useParams<{ id: string }>()

	const { data: reviews, isLoading: isLoadingReviews } = useQuery({
		queryKey: [QUERY_KEYS.REVIEWS_BY_MANGA, params.id],
		queryFn: () => ReviewService.getByManga(params.id),
		enabled: !!params.id,
		staleTime: 10 * 60 * 1000
	})

	return { reviews, isLoadingReviews }
}
