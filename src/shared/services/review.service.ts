import { getReviewUrl } from '../config/api.config'
import type { ICreateReview, IReview } from '../types/review.interface'

import { axiosClassic, axiosWithAuth } from './api/interceptors.api'

export const ReviewService = {
	async create(data: ICreateReview) {
		const isAnswer = !!data.parent
		const res = await axiosWithAuth<{ review: IReview }>({
			url: getReviewUrl(isAnswer ? `/answer/${data.parent}` : ''),
			method: 'POST',
			data
		})

		return res.data.review
	},

	async getByManga(mangaId: string) {
		const res = await axiosClassic<{ reviews: IReview[] }>({
			url: getReviewUrl(`/get-by-manga/${mangaId}`),
			method: 'GET'
		})

		return res.data.reviews
	},

	async getByParent(parentId: string) {
		const res = await axiosClassic<{ children: IReview[] }>({
			url: getReviewUrl(`/get-by-parent/${parentId}`),
			method: 'GET'
		})

		return res.data.children
	}
}
