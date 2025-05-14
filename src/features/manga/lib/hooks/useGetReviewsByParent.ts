import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ReviewService } from '@/shared/services/review.service'

export function useGetReviewsByParent(parentId: string) {
	const { data: reviews, isLoading: isLoadingReviews } = useQuery({
		queryKey: [QUERY_KEYS.REVIEWS_BY_PARENT, parentId],
		queryFn: () => ReviewService.getByParent(parentId),
		enabled: !!parentId,
		staleTime: 10 * 60 * 1000
	})

	return { reviews, isLoadingReviews }
}
