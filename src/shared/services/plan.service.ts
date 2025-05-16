import { getPlanUrl } from '../config/api.config'
import type { IPlan } from '../types/plan.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const PlanService = {
	async create() {},

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
	}
}
