'use client'

import { type PropsWithChildren } from 'react'

import { useAuth } from '@/shared/hooks/useAuth'
import { useCurrent } from '@/shared/hooks/useCurrent'

interface OnlyUserProps {
	fallback?: JSX.Element
	role?: 'admin' | 'publish' | 'user'
}

function OnlyUser({
	fallback,
	children,
	role = 'user'
}: PropsWithChildren<OnlyUserProps>) {
	const { isAuthenticated } = useAuth()
	const { user } = useCurrent()

	if (isAuthenticated) {
		if (role === 'user') return children
		if (user?.role === role) return children
		return fallback ? fallback : null
	}

	return fallback ? fallback : null
}

export default OnlyUser
