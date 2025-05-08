import { getPageUrl } from '../config/api.config'
import type {
	ICreateSinglePage,
	IPage,
	IUpdateImagePage,
	IUpdateNumberPage
} from '../types/page.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const PageService = {
	async create(data: ICreateSinglePage) {
		const res = await axiosWithAuth<{ page: IPage }>({
			url: getPageUrl(''),
			method: 'POST',
			data
		})

		return res.data.page
	},

	async updateImage(id: string, data: IUpdateImagePage) {
		const res = await axiosWithAuth<{ page: IPage }>({
			url: getPageUrl(`/update-image/${id}`),
			method: 'PATCH',
			data
		})

		return res.data.page
	},

	async updateNumber(id: string, data: IUpdateNumberPage) {
		const res = await axiosWithAuth<{ page: IPage }>({
			url: getPageUrl(`/update-number/${id}`),
			method: 'PATCH',
			data
		})

		return res.data.page
	},

	async delete(id: string) {
		const res = await axiosWithAuth<boolean>({
			url: getPageUrl(`/${id}`),
			method: 'DELETE'
		})

		return res.data
	}
}
