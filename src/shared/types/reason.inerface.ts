import type { IReview } from './review.interface'
import type { ITimeStampts } from './timestempts.interface'
import type { IUser } from './user.interface'

export interface IReason extends ITimeStampts {
	_id: string
	user: IUser
	review: IReview
	text: string
}
