import { getPremiumUrl } from '../config/api.config'

import { axiosWithAuth } from './api/interceptors.api'

export const PremiumService = {
	async place() {
		const res = await axiosWithAuth<ICreatePremiumRes>({
			url: getPremiumUrl('/place'),
			method: 'POST'
		})

		return res.data?.payment
	}
}
