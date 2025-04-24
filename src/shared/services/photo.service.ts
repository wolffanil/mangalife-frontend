import { getFileUrl } from '../config/api.config'

import { axiosWithAuth } from './api/interceptors.api'
import { requestWithAuth } from './api/request.api'

export const PhotoService = {
	async uploadProfile(file: FormData, folder: string) {
		const res = await axiosWithAuth<{ url: string }>({
			url: getFileUrl(`?folder=${folder}`),

			data: file,
			method: 'POST',
			headers: { 'Content-Type': 'multipart/form-data' }
		})

		return res?.data?.url
	}
}
