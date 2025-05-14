import { getMangaUrl } from '../config/api.config'
import type { IEditManga, IManga, IMangaSearch } from '../types/manga.interface'

import { axiosClassic, axiosWithAuth } from './api/interceptors.api'

export const MangaService = {
	async search(q: string) {
		const res = await axiosClassic<{ mangas: IMangaSearch[] }>({
			url: getMangaUrl('/search'),
			method: 'GET',
			params: {
				q
			}
		})

		return res.data?.mangas
	},

	async getAll(
		type?: string,
		status?: string,
		genres?: string,
		filter?: boolean
	) {
		const res = await axiosClassic<{ mangas: IManga[] }>({
			url: getMangaUrl(''),
			method: 'GET',
			params: {
				...(type && filter ? { type } : null),
				...(status && filter ? { status } : null),
				...(genres && filter ? { genres } : null)
			}
		})

		return res.data.mangas
	},

	async getSimilarByAuthor(authorId: string) {
		const res = await axiosClassic<{ mangas: IManga[] }>({
			url: getMangaUrl(`/get-similar-by-author/${authorId}`),
			method: 'GET'
		})

		return res.data?.mangas
	},

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

	async getPopular() {
		const res = await axiosClassic<{ mangas: IManga[] }>({
			url: getMangaUrl(`/get-popular`),
			method: 'GET'
		})

		return res.data?.mangas ?? []
	},

	async getNew() {
		const res = await axiosClassic<{ mangas: IManga[] }>({
			url: getMangaUrl(`/get-new`),
			method: 'GET'
		})

		return res.data?.mangas ?? []
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
