import { create } from 'zustand'

import { getNewTokens } from '@/shared/services/api/helper.api'
import {
	deleteAccessToken,
	getAccessToken
} from '@/shared/services/auth/auth.helper'

import type { AuthStore } from './auth.types'

export const authStore = create<AuthStore>(set => ({
	isLoading: true,
	user: null,
	isAuthenticated: false,
	setIsAuthenticated: value => set({ isAuthenticated: value }),
	logout: () => {
		set({ isAuthenticated: false, user: null })
		deleteAccessToken()
	},
	setIsLoading: value => set({ isLoading: value }),
	setUser: value => set({ user: value }),
	refresh: async () => {
		const accessToken = getAccessToken()

		if (accessToken) {
			const userData = await getNewTokens()

			if (!userData?.data?.user?._id) {
				set({ isLoading: false })
				return
			}

			set({ user: userData?.data.user ?? null, isAuthenticated: true })
		}

		set({ isLoading: false })
		return
	}
}))
