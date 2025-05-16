import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { PlanService } from '@/shared/services/plan.service'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetMyPlans() {
	const [q] = useQueryState('q')
	const [status, setStatus] = useQueryState('status', {
		defaultValue: 'Все'
	})
	const [sortBy] = useQueryState('sortBy')

	const search = q ? q : ''
	const sortByCurrent = sortBy ? sortBy : ''

	const { data, isLoading: isLoadingMangas } = useQuery({
		queryKey: [QUERY_KEYS.GET_MY_PLANS, search, sortByCurrent],
		queryFn: () => PlanService.getMy(search, sortByCurrent),
		staleTime: 10 * 60 * 1000,
		select: data =>
			data?.map(plan => ({
				...plan,
				manga: {
					...plan.manga,
					poster: getMediaSource(plan.manga.poster)
				}
			}))
	})

	const mangas =
		status !== 'Все' ? data?.filter(plan => plan.status === status) : data

	return { mangas, isLoadingMangas }
}
