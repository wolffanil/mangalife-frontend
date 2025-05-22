import { useQueryState } from 'nuqs'
import { useEffect } from 'react'

import { handleToast } from '../utils/handle-toast'

export function useIsBanUser() {
	const [userIsBan, setUserIsBan] = useQueryState('user-is-ban')

	useEffect(() => {
		if (userIsBan !== 'true') return

		// handleToast('error', 'Вы были забанены')

		setUserIsBan(null)
	}, [])
}
