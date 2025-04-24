import { getGenreUrl } from '../config/api.config'
import type { TGenre } from '../schemas/genre/genre.schema'
import type { GenreRes, GenresRes } from '../types/genre.interface'

import { axiosClassic, axiosWithAuth } from './api/interceptors.api'

export const GenresService = {
	async getAll() {
		const res = await axiosClassic<GenresRes>({
			url: getGenreUrl(''),
			method: 'GET'
		})

		return res.data?.genres
	},

	async getById(id: string) {
		const res = await axiosClassic<GenreRes>({
			url: getGenreUrl(`/${id}`),
			method: 'GET'
		})

		return res.data?.genre
	},

	async create(data: TGenre) {
		const res = await axiosWithAuth<GenreRes>({
			url: getGenreUrl(''),
			data,
			method: 'POST'
		})

		return res.data?.genre
	},

	async update(id: string, data: TGenre) {
		const res = await axiosWithAuth<GenreRes>({
			url: getGenreUrl(`/${id}`),
			method: 'PATCH',
			data
		})

		return res.data?.genre
	},

	async delete(id: string) {
		const res = await axiosWithAuth<boolean>({
			url: getGenreUrl(`/${id}`),
			method: 'DELETE'
		})

		return res.data
	}
}
