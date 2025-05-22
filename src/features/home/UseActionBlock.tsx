'use client'

import { useCurrent } from '@/shared/hooks/useCurrent'
import { useIsBanUser } from '@/shared/hooks/useIsBanUser'
import { useRefreshUser } from '@/shared/hooks/useRefreshUser'

function UseActionBlock() {
	useIsBanUser()
	useRefreshUser()
	useCurrent()
	return null
}

export default UseActionBlock
