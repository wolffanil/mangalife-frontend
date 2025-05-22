import { getPremiumUrl } from '../config/api.config'
import type { ICreatePremiumRes, IPremium } from '../types/premium.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const PremiumService = {
	async place() {
		const res = await axiosWithAuth<ICreatePremiumRes>({
			url: getPremiumUrl('/place'),
			method: 'POST'
		})

		return res.data?.payment
	},

	async exist() {
		const res = await axiosWithAuth<{ premium: IPremium }>({
			url: getPremiumUrl('/exist'),
			method: 'GET'
		})

		return res.data?.premium
	}
}
