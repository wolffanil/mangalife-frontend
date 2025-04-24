import type { ITimeStampts } from './timestempts.interface'

export interface IGenre extends ITimeStampts {
	_id: string
	title: string
}

export interface GenresRes {
	genres: IGenre[]
}

export interface GenreRes {
	genre: IGenre
}
