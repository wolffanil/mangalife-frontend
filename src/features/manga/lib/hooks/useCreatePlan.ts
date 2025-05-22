import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { PlanService } from '@/shared/services/plan.service'
import type { PlanStatusType } from '@/shared/types/plan.interface'
import { handleErrors } from '@/shared/utils/handle-errors'

export function useCreatePlan() {
	const params = useParams<{ id: string }>()
	const queryClient = useQueryClient()

	const { mutateAsync: createPlan, isPending: isCreatingPlan } = useMutation({
		mutationKey: [MUTATION_KEYS.CREATE_PLAN],
		mutationFn: (status: PlanStatusType) =>
			PlanService.create(params.id, status),
		onSuccess: () => {
			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_MY_PLANS],
				exact: false
			})
		},
		onError: (errors: any) => {
			handleErrors(errors)
		}
	})

	const handleCreatePlan = async (status: PlanStatusType) => {
		await createPlan(status)
	}

	return useMemo(
		() => ({
			handleCreatePlan,
			isCreatingPlan
		}),
		[handleCreatePlan, isCreatingPlan]
	)
}
