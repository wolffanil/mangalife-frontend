import { authStore } from '@/shared/store/auth/auth.store'

import { AuthService } from '../auth/auth.service'

export async function handleBan() {
	authStore.getState().logout()
	await AuthService.logout()
}
