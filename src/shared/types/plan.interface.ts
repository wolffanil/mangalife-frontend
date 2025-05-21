import { IChapterWithPages } from './chapter.interface'
import type { IManga } from './manga.interface'
import type { ITimeStampts } from './timestempts.interface'

interface IMangaPlan extends IManga {
	pages: number
	chapters: number
}

export type PlanStatusType = 'Читаю' | 'Прочитано' | 'В планах' | 'Любимые'

export interface IPlan extends ITimeStampts {
	_id: string
	pages: number
	currentPage: number
	chapter: number
	manga: IMangaPlan
	user: string
	status: PlanStatusType
}

export interface IChapterPlan {
	chapter: IChapterWithPages
	plan: {
		_id: string
		currentPage: number
	}
}
