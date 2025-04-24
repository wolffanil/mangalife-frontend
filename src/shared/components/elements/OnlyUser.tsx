'use client'

import { type PropsWithChildren } from 'react'

import { useAuth } from '@/shared/hooks/useAuth'
import { useRefreshUser } from '@/shared/hooks/useRefreshUser'

interface OnlyUserProps {
	fallback?: JSX.Element
}

function OnlyUser({ fallback, children }: PropsWithChildren<OnlyUserProps>) {
	const { isAuthenticated } = useAuth()
	useRefreshUser()

	if (isAuthenticated) {
		return children
	}

	return fallback ? fallback : null
}

export default OnlyUser
