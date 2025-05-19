import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { ReviewService } from '@/shared/services/review.service'
import type { ReviewStatusType } from '@/shared/types/review.interface'
import { handleErrors } from '@/shared/utils/handle-errors'

export function useChangeStatus(reviewId: string) {
	const { mutateAsync: changeStatus, isPending: isLoadingChangeStatus } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CHANGE_STATUS_REVIEW],
			mutationFn: (status: ReviewStatusType) =>
				ReviewService.changeStatus(reviewId, status),
			onError: (errors: any) => {
				handleErrors(errors)
			}
		})

	const handleChangeStatus = async (status: ReviewStatusType) => {
		await changeStatus(status)
	}

	return useMemo(
		() => ({
			handleChangeStatus,
			isLoadingChangeStatus
		}),
		[handleChangeStatus, isLoadingChangeStatus]
	)
}
