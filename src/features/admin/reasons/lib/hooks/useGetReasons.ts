import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { ReasonService } from '@/shared/services/reason.service'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetReasons() {
	const { data: reasons, isLoading: isLoadingReasons } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_REASONS],
		queryFn: () => ReasonService.getAll(),
		select: data =>
			data?.map(reason => ({
				...reason,
				user: {
					...reason.user,
					picture: getMediaSource(reason.user.picture)
				}
			}))
	})

	return { reasons, isLoadingReasons }
}
