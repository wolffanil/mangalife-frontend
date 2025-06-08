'use server'

import { cookies } from 'next/headers'

import { EnumTokens } from '../types/auth.interface'

export const deleteRefreshCookie = async () => {
	try {
		const cookiesState = await cookies()

		cookiesState.delete(EnumTokens.REFRESH_TOKEN)
	} catch {}
}
