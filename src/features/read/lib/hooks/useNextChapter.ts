import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useQueryState } from 'nuqs'
import { useMemo } from 'react'

import { useGetChapters } from '@/features/dashboard-chapters/hooks/useGetChapters'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { PlanService } from '@/shared/services/plan.service'
import { IChapter } from '@/shared/types/chapter.interface'
import { IChapterPlan } from '@/shared/types/plan.interface'

import { useGetChapterByUser } from './useGetChapterByUser'

export function useNextChapter() {
	const { chapter } = useGetChapterByUser()
	const [cn, setCn] = useQueryState('cn')
	const { chapters } = useGetChapters()
	const params = useParams<{ mangaId: string }>()

	const queryClient = useQueryClient()

	const chapterNextIndex =
		chapters?.findIndex(c => c._id === chapter?.chapter?._id) ?? 0

	const chapterNext = chapters?.length
		? chapters[chapterNextIndex + 1]
		: ({} as IChapter)

	const planId = chapter?.plan?._id

	const { mutateAsync: updateChapter } = useMutation({
		mutationFn: (planId: string) => PlanService.updateChapter(planId)
	})

	const handleNextChapter = async () => {
		const nextChapterNumber = Number(cn) + 1
		setCn(String(nextChapterNumber))
		if (planId && chapterNext?._id) {
			await updateChapter(planId)

			queryClient.setQueryData(
				[QUERY_KEYS.AUTH, QUERY_KEYS.CHAPTER_BY_USER, params.mangaId],
				(data: IChapterPlan) =>
					({
						...data,
						chapter: { ...chapterNext },
						plan: { ...data.plan, currentPage: 1 }
					}) as IChapterPlan
			)

			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.GET_MY_PLANS],
				exact: false
			})
		}
	}

	return useMemo(() => ({ handleNextChapter }), [planId, handleNextChapter])
}
