import { useQueryState } from 'nuqs'
import { useEffect } from 'react'

import { useCurrent } from './useCurrent'

export function useRefreshUser() {
	const { refresh } = useCurrent()

	const [accessToken, setAccessToken] = useQueryState('accessToken')

	useEffect(() => {
		if (accessToken) {
			localStorage.setItem('accessToken', accessToken)
			refresh?.()
			setAccessToken(null)
		}
	}, [accessToken])
}
