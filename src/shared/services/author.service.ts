import { getAuthorUrl } from '../config/api.config'
import { type TAuthor } from '../schemas/author/author.schema'
import type { AuthorRes, AuthorsRes } from '../types/author.interface'

import { axiosClassic, axiosWithAuth } from './api/interceptors.api'

export const AuthorsService = {
	async getAll() {
		const res = await axiosClassic<AuthorsRes>({
			url: getAuthorUrl(''),
			method: 'GET'
		})

		return res.data?.authors
	},

	async getById(id: string) {
		const res = await axiosClassic<AuthorRes>({
			url: getAuthorUrl(`/${id}`),
			method: 'GET'
		})

		return res.data?.author
	},

	async create(data: TAuthor) {
		const res = await axiosWithAuth<AuthorRes>({
			url: getAuthorUrl(''),
			data,
			method: 'POST'
		})

		return res.data?.author
	},

	async update(id: string, data: TAuthor) {
		const res = await axiosWithAuth<AuthorRes>({
			url: getAuthorUrl(`/${id}`),
			method: 'PATCH',
			data
		})

		return res.data?.author
	},

	async delete(id: string) {
		const res = await axiosWithAuth<boolean>({
			url: getAuthorUrl(`/${id}`),
			method: 'DELETE'
		})

		return res.data
	}
}
