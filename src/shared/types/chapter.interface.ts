import type { IManga } from './manga.interface'
import type { IPage } from './page.interface'
import type { ITimeStampts } from './timestempts.interface'

export interface IChapter extends ITimeStampts {
	_id: string
	chapter: number
	tom: number
	name: string
	manga: IManga | string
}

export interface IPostChapter
	extends Pick<IChapter, 'chapter' | 'tom' | 'name' | 'manga'> {
	pagesUrl: string[]
}

export interface IChapterWithPages extends IChapter {
	pages: IPage[]
}

export interface IUpdateChapter
	extends Pick<IChapter, 'chapter' | 'tom' | 'name'> {}
