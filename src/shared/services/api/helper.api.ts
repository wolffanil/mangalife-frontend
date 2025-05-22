import axios from 'axios'

import { IAuthResponse } from '@/shared/types/auth.interface'

import { API_URL, getAuthUrl } from '../../config/api.config'
import { saveAccessToken } from '../auth/auth.helper'

import { handleBan } from './handleBanUser'

export const getNewTokens = async () => {
	try {
		const response = await axios.post<string, { data: IAuthResponse }>(
			API_URL + getAuthUrl('/refresh'),
			{},
			{
				headers: {
					'Content-Type': 'application/json'
				},
				withCredentials: true
			}
		)

		if (response.data.accessToken)
			saveAccessToken({ accessToken: response.data.accessToken })

		return response
	} catch (error: any) {
		if (
			error?.response?.data?.message === 'Вы были забанены' &&
			error?.response?.data?.statusCode === 403
		) {
			await handleBan()
			return
		}
	}
}
