'use client'

import { PropsWithChildren } from 'react'

import { usePage } from '@/shared/hooks/page/usePage'

function SelectPage({ children }: PropsWithChildren<unknown>) {
	const { page } = usePage()

	if (!page?._id) return null

	return children
}

export default SelectPage
