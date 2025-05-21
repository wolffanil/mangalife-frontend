import { getChapterUrl } from '../config/api.config'
import type {
	IChapter,
	IChapterWithPages,
	IPostChapter,
	IUpdateChapter
} from '../types/chapter.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const ChapterService = {
	async create(data: IPostChapter) {
		const res = await axiosWithAuth<{ page: IChapter }>({
			url: getChapterUrl(''),
			data,
			method: 'POST'
		})

		return res.data.page
	},

	async getByMangaId(mangaId: string) {
		const res = await axiosWithAuth<{ chapters: IChapter[] }>({
			url: getChapterUrl(`/get-by-manga/${mangaId}`),
			method: 'GET'
		})

		return res.data?.chapters || []
	},

	async getByUser(mangaId: string) {
		const res = await axiosWithAuth<{
			chapter: IChapterWithPages
			plan?: { _id: string; currentPage: number }
		}>({
			url: getChapterUrl(`/get-by-user/${mangaId}`),
			method: 'GET'
		})

		return res.data
	},

	async getById(chapterId: string) {
		const res = await axiosWithAuth<{ chapter: IChapterWithPages }>({
			url: getChapterUrl(`/${chapterId}`),
			method: 'GET'
		})

		return res.data?.chapter || {}
	},

	async update(chapterId: string, data: IUpdateChapter) {
		const res = await axiosWithAuth<{ chapter: IChapter }>({
			url: getChapterUrl(`/${chapterId}`),
			method: 'PATCH',
			data
		})

		return res.data.chapter
	},

	async delete(chapterId: string) {
		const res = await axiosWithAuth<boolean>({
			url: getChapterUrl(`/${chapterId}`),
			method: 'DELETE'
		})

		return res.data
	}
}
