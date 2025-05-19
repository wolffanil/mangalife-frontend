import { getReasonUrl } from '../config/api.config'
import type { IReason } from '../types/reason.inerface'

import { axiosWithAuth } from './api/interceptors.api'

export const ReasonService = {
	async getAll() {
		const res = await axiosWithAuth<{ reasons: IReason[] }>({
			url: getReasonUrl(''),
			method: 'GET'
		})

		return res.data.reasons
	},

	async delete(reasonId: string) {
		const res = await axiosWithAuth<boolean>({
			url: getReasonUrl(`/${reasonId}`),
			method: 'DELETE'
		})

		return res.data
	}
}
