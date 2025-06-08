import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteRefreshCookie } from '../actions/actions.cookie'
import { MUTATION_KEYS } from '../enums/mutation.keys'
import { QUERY_KEYS } from '../enums/query.keys'
import { AuthService } from '../services/auth/auth.service'
import { authStore } from '../store/auth/auth.store'
import type { IUser } from '../types/user.interface'

export function useAuth() {
	const queryClient = useQueryClient()

	const { mutateAsync: logoutFn } = useMutation({
		mutationKey: [MUTATION_KEYS.LOGOUT],
		mutationFn: () => AuthService.logout()
	})

	const isAuthenticated = authStore(state => state.isAuthenticated)

	const setIsAuthenticated = authStore(state => state.setIsAuthenticated)
	const setUser = authStore(state => state.setUser)

	const logoutState = authStore(state => state.logout)

	const auth = (user: IUser) => {
		setUser(user)
		setIsAuthenticated(true)
	}

	const logout = async () => {
		queryClient.removeQueries?.({
			queryKey: [QUERY_KEYS.AUTH],
			exact: false
		})
		logoutState()
		await logoutFn()
		await deleteRefreshCookie()
	}

	return {
		isAuthenticated,
		auth,
		logout
	}
}
