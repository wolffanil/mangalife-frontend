import { getFileUrl } from '../config/api.config'

import { axiosWithAuth } from './api/interceptors.api'

export const PhotoService = {
	async uploadProfile(file: FormData, folder: string) {
		const res = await axiosWithAuth<{ url: string }>({
			url: getFileUrl(`?folder=${folder}`),

			data: file,
			method: 'POST',
			headers: { 'Content-Type': 'multipart/form-data' }
		})

		return res?.data?.url
	},

	async uploadZip(file: FormData, folder: string, mangaId: string) {
		const res = await axiosWithAuth<{ pagesUrl: string[] }>({
			url: getFileUrl(`/upload-zip?folder=${folder}&mangaId=${mangaId}`),
			method: 'POST',
			data: file,
			headers: { 'Content-Type': 'multipart/form-data' }
		})

		return res.data?.pagesUrl || []
	}
}
