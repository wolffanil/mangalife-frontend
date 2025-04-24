import { EnumTokens, type ITokens } from '@/shared/types/auth.interface'

export const getAccessToken = () => {
	const accessToken = localStorage.getItem(EnumTokens.ACCESS_TOKEN)

	return accessToken || null
}

export const saveAccessToken = (data: ITokens) => {
	localStorage.setItem(EnumTokens.ACCESS_TOKEN, data.accessToken)
}

export const deleteAccessToken = () => {
	localStorage.removeItem(EnumTokens.ACCESS_TOKEN)
}
