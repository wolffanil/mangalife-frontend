import type { ITimeStampts } from './timestempts.interface'

export interface IAuthor extends ITimeStampts {
	_id: string
	name: string
}

export interface AuthorsRes {
	authors: IAuthor[]
}

export interface AuthorRes {
	author: IAuthor
}
