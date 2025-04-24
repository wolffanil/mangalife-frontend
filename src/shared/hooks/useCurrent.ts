import { useEffect } from 'react'

import { authStore } from '../store/auth/auth.store'

import { useAuth } from './useAuth'

export function useCurrent() {
	const { isAuthenticated, logout } = useAuth()
	const refresh = authStore(state => state.refresh)

	const user = authStore(state => state.user)
	const isLoading = authStore(state => state.isLoading)

	const setUser = authStore(state => state.setUser)

	useEffect(() => {
		if (!isAuthenticated) {
			refresh()
		}
	}, [logout, isAuthenticated])

	return {
		user: user ?? undefined,
		isLoadingProfile: isLoading,
		refresh,
		setUser
	}
}
