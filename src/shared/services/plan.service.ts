import { getPlanUrl } from '../config/api.config'
import type { IPlan, PlanStatusType } from '../types/plan.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const PlanService = {
	async create(mangaId: string, status: PlanStatusType) {
		const res = await axiosWithAuth<{ plan: IPlan }>({
			url: getPlanUrl('/'),
			method: 'POST',
			data: {
				manga: mangaId,
				status
			}
		})

		return res.data.plan
	},

	async delete(planId: string) {
		const res = await axiosWithAuth<boolean>({
			url: getPlanUrl(`/${planId}`),
			method: 'DELETE'
		})

		return res.data
	},

	async getMy(q?: string, sortBy?: string) {
		const res = await axiosWithAuth<{ plans: IPlan[] }>({
			url: getPlanUrl('/my'),
			method: 'GET',
			params: {
				...(q ? { q } : null),
				...(sortBy ? { sortBy } : null)
			}
		})

		return res.data.plans
	},

	async updateChapter(planId: string) {
		const res = await axiosWithAuth<{ plan: IPlan }>({
			url: getPlanUrl(`/update-chapter/${planId}`),
			method: 'PATCH'
		})

		return res.data.plan
	},

	async updatePage(planId: string) {
		const res = await axiosWithAuth<{ plan: IPlan }>({
			url: getPlanUrl(`/update-page/${planId}`),
			method: 'PATCH'
		})

		return res.data.plan
	}
}
