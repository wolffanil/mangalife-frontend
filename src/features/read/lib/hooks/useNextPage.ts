import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { PlanService } from '@/shared/services/plan.service'
import { IChapterPlan } from '@/shared/types/plan.interface'

import { useGetChapterByUser } from './useGetChapterByUser'

export function useNextPage() {
	const { chapter } = useGetChapterByUser()
	const params = useParams<{ mangaId: string }>()

	const planId = chapter?.plan?._id

	const queryClient = useQueryClient()

	const { mutateAsync: updatePage } = useMutation({
		mutationFn: (planId: string) => PlanService.updatePage(planId)
	})

	const handleNextPage = async () => {
		if (planId) {
			queryClient.setQueryData(
				[QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_USER, params.mangaId],
				(data: IChapterPlan) =>
					({
						...data,
						plan: {
							...data.plan,
							currentPage: data.plan.currentPage + 1
						}
					}) as IChapterPlan
			)
			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.GET_MY_PLANS],
				exact: false
			})

			await updatePage(planId)
		}
	}

	return useMemo(() => ({ handleNextPage }), [handleNextPage, planId])
}
