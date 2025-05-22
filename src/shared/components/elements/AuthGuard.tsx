'use client'

import { redirect } from 'next/navigation'
import { type PropsWithChildren } from 'react'

import { useAuth } from '@/shared/hooks/useAuth'
import { useCurrent } from '@/shared/hooks/useCurrent'

interface AuthGuardProps {
	onlyAdmin?: boolean
	onlyPublish?: boolean
}

function AuthGuard({
	children,
	onlyAdmin,
	onlyPublish
}: PropsWithChildren<AuthGuardProps>) {
	const { isAuthenticated } = useAuth()
	const { isLoadingProfile, user } = useCurrent()

	if (isLoadingProfile)
		return (
			<div className='fixed inset-0 min-h-[100vh] bg-white bg-opacity-50' />
		)

	if (!isAuthenticated) redirect('/')

	if (onlyAdmin && user?.role !== 'admin') return redirect('/')

	if (onlyPublish && user?.role !== 'publish') return redirect('/')

	return children
}

export default AuthGuard
