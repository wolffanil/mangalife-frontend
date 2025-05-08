import type { IChapter } from './chapter.interface'
import type { IManga } from './manga.interface'
import type { ITimeStampts } from './timestempts.interface'

export interface IPage extends ITimeStampts {
	_id: string
	chapter: IChapter | string
	image: string
	number: number
	manga: IManga | string
}

export interface ICreateSinglePage
	extends Pick<IPage, 'chapter' | 'manga' | 'image'> {}

export interface IUpdateImagePage extends Pick<IPage, 'image'> {}

export interface IUpdateNumberPage extends Pick<IPage, 'number'> {}
