import type { ITimeStampts } from './timestempts.interface'

export type roleUser = 'user' | 'publish' | 'admin'

export interface IUser extends ITimeStampts {
	_id: string
	email: string
	picture: string
	nickname: string
	isBan: boolean
	role: roleUser
	gender?: genderUser
	bio?: string | undefined
	favorites: []
}

export type genderUser = 'мужской' | 'женский'
