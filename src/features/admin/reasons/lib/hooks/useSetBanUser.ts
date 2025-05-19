import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { UserService } from '@/shared/services/user.service'
import { IReason } from '@/shared/types/reason.inerface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useSetBanUser(reasonId: string, userId: string) {
	const queryClient = useQueryClient()

	const { mutateAsync: setBanUser, isPending: isLoadingSetBan } = useMutation(
		{
			mutationKey: [MUTATION_KEYS.SET_BAN_USER],
			mutationFn: () => UserService.setBan(userId, reasonId),
			onSuccess: () => {
				handleToast('success', 'Пользователь успешно забанен')
				queryClient.setQueryData(
					[QUERY_KEYS.AUTH, QUERY_KEYS.GET_REASONS],
					(data: IReason[]) =>
						data?.filter(reason => reason._id !== reasonId)
				)
			},
			onError: (errors: any) => {
				handleErrors(errors)
			}
		}
	)

	return useMemo(
		() => ({
			setBanUser,
			isLoadingSetBan
		}),
		[setBanUser, isLoadingSetBan]
	)
}
