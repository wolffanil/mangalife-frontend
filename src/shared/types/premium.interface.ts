import type { ITimeStampts } from './timestempts.interface'

export interface ICreatePremiumRes {
	payment: string
}

export interface IPremium extends ITimeStampts {
	_id: string
	user: string
	status: 'pending' | 'payed'
}
