import { getAuthUrl } from '@/shared/config/api.config'
import type { TypeLoginSchema } from '@/shared/schemas/auth/login'
import type {
	IAuthResponse,
	ILogin,
	IRegister
} from '@/shared/types/auth.interface'

import { axiosClassic } from '../api/interceptors.api'

import { deleteAccessToken, saveAccessToken } from './auth.helper'

export const AuthService = {
	async register(data: IRegister, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await axiosClassic<IAuthResponse>({
			url: getAuthUrl('/register'),
			method: 'POST',
			headers,
			data
		})

		if (response?.data.accessToken) {
			saveAccessToken({ accessToken: response.data.accessToken })
		}

		return response.data
	},

	async checkEmail(data: TypeLoginSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await axiosClassic<boolean>({
			url: getAuthUrl('/checkEmail'),
			method: 'POST',
			headers,
			data
		})

		return response.data
	},

	async login(data: ILogin, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await axiosClassic<IAuthResponse>({
			url: getAuthUrl('/login'),
			method: 'POST',
			headers,
			data
		})

		if (response?.data.accessToken) {
			saveAccessToken({ accessToken: response.data.accessToken })
		}

		return response.data
	},

	async logout() {
		deleteAccessToken()

		await axiosClassic({
			url: getAuthUrl('/logout'),
			method: 'POST'
		})

		return
	}
}
