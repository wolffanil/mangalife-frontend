'use client'

import dynamic from 'next/dynamic'
import { type PropsWithChildren } from 'react'

const ProgressProviderComponent = dynamic(
	() => import('@bprogress/next').then(mod => mod.AppProgressProvider),
	{ ssr: false }
)
function ProgressProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<ProgressProviderComponent color='#6FBEA8' shallowRouting height='6px'>
			{children}
		</ProgressProviderComponent>
	)
}

export default ProgressProvider
