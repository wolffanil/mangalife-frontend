import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { UserService } from '@/shared/services/user.service'
import type { IUserBan } from '@/shared/types/user.interface'
import { handleErrors } from '@/shared/utils/handle-errors'

export function useSetUnBanUser(userId: string) {
	const queryClient = useQueryClient()

	const { mutateAsync: setUnBan, isPending: isLoadingUnBan } = useMutation({
		mutationKey: [MUTATION_KEYS.SET_UN_BAN_USER],
		mutationFn: () => UserService.setUnBan(userId),
		onSuccess: () => {
			queryClient.setQueryData(
				[QUERY_KEYS.AUTH, QUERY_KEYS.GET_USERS],
				(data: IUserBan[]) => data?.filter(user => user._id !== userId)
			)
		},
		onError: errors => {
			handleErrors(errors)
		}
	})

	return useMemo(
		() => ({
			setUnBan,
			isLoadingUnBan
		}),
		[setUnBan, isLoadingUnBan]
	)
}
