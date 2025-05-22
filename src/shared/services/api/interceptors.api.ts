import axios, { CreateAxiosDefaults } from 'axios'

import { handleToast } from '@/shared/utils/handle-toast'

import { API_URL } from '../../config/api.config'
import { deleteAccessToken, getAccessToken } from '../auth/auth.helper'

import { errorCatch } from './error.api'
import { handleBan } from './handleBanUser'
import { getNewTokens } from './helper.api'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error?.response?.data?.message === 'Вы были забанены' &&
			error?.response?.data?.statusCode === 403
		) {
			await handleBan()
			handleToast('error', 'Вы были забанены')

			return
		}

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') deleteAccessToken?.()
			}
		}

		return Promise.reject(error)
	}
)
export { axiosClassic, axiosWithAuth }
