'use client'

import { redirect } from 'next/navigation'
import { type PropsWithChildren } from 'react'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { useGetPremium } from '@/shared/hooks/useGetPremium'

interface PremiumGuardProps extends PropsWithChildren {
	isCheck: boolean
}

function PremiumGuard({ isCheck, children }: PremiumGuardProps) {
	const { premium, isLoadingPremium } = useGetPremium()

	if (isLoadingPremium)
		return (
			<div className='fixed inset-0 min-h-[100vh] bg-white bg-opacity-50' />
		)

	if (isCheck && premium?.status !== 'payed') redirect(PUBLIC_URL.subscribe())

	if (!isCheck && premium?.status === 'payed') redirect(PUBLIC_URL.main())

	return children
}

export default PremiumGuard
