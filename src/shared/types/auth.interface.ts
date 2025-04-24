import { IUser } from './user.interface'

export const EnumTokens = {
	ACCESS_TOKEN: 'accessToken',
	REFRESH_TOKEN: 'refreshToken_mangalife'
}

export type EnumTokens = (typeof EnumTokens)[keyof typeof EnumTokens]

export interface ITokens {
	accessToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export interface IRegister extends Pick<IUser, 'nickname' | 'email'> {
	password: string
}

export interface IRegisterMutation extends IRegister {
	recaptcha: string
}

export interface IEmailCheck extends Pick<IUser, 'email'> {}

export interface ILogin extends Pick<IUser, 'email'> {
	password?: string | undefined
}
