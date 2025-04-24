import type { IUser } from '@/shared/types/user.interface'

export interface AuthStore {
	isAuthenticated: boolean
	setIsAuthenticated: (value: boolean) => void
	user: IUser | null
	isLoading: boolean
	setIsLoading: (value: boolean) => void
	setUser: (value: IUser) => void
	logout: () => void
	refresh: () => void
}
