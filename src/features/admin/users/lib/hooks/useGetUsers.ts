import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { UserService } from '@/shared/services/user.service'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetUsers() {
	const { data: users, isLoading: isLoadingUsers } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_USERS],
		queryFn: () => UserService.getAllBan(),
		select: data =>
			data.map(user => ({
				...user,
				picture: getMediaSource(user.picture)
			}))
	})

	return { users, isLoadingUsers }
}
