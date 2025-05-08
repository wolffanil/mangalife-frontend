import { getMangaUrl } from '../config/api.config'
import type { IEditManga, IManga } from '../types/manga.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const MangaService = {
	async create(data: IEditManga) {
		const res = await axiosWithAuth<{ manga: IManga }>({
			url: getMangaUrl(''),
			method: 'POST',
			data
		})

		return res.data.manga
	},

	async update(id: string, data: IEditManga) {
		const res = await axiosWithAuth<{ manga: IManga }>({
			url: getMangaUrl(`/${id}`),
			method: 'PATCH',
			data
		})

		return res.data.manga
	},

	async getById(id: string) {
		const res = await axiosWithAuth<{ manga: IManga }>({
			url: getMangaUrl(`/${id}`),
			method: 'GET'
		})

		return res.data?.manga ?? {}
	},

	async delete(id: string) {
		const res = await axiosWithAuth<boolean>({
			url: getMangaUrl(`/${id}`),
			method: 'DELETE'
		})

		return res.data
	}
}
