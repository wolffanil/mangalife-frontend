import type { IAuthor } from './author.interface'
import type { IGenre } from './genre.interface'
import type { ITimeStampts } from './timestempts.interface'

export type TMangaStatus = 'Анонс' | 'Продолжается' | 'Завершён'
export type TMangaType = 'Манга' | 'Манхва' | 'Манхуа' | 'Руманга'

export interface IManga extends ITimeStampts {
	_id: string
	title: string
	titleRu: string
	description: string
	genres: IGenre[]
	author: IAuthor
	ageLimit: number
	year: number
	poster: string
	country: string
	status: TMangaStatus
	type: TMangaType
}

export interface IEditManga
	extends Omit<
		IManga,
		'createdAt' | 'updatedAt' | '_id' | 'status' | 'type'
	> {
	status: string
	type: string
}
