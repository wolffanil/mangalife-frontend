import type { ITimeStampts } from './timestempts.interface'
import type { IUser } from './user.interface'

export interface IReview extends ITimeStampts {
	_id: string
	text: string
	manga: string
	parent?: string
	rating?: number
	isComplain: boolean
	status: ReviewStatusType
	user: Pick<IUser, '_id' | 'picture' | 'nickname'>
}

export type ReviewStatusType =
	| 'Новый'
	| 'Отклонённый'
	| 'Предупреждения'
	| 'Заблокированный'

export interface ICreateReview {
	manga: string
	text: string
	rating?: Number
	parent?: string
}
