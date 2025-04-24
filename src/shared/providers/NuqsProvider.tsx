'use client'

import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { PropsWithChildren } from 'react'

interface NuqsProviderProps {}

function NuqsProvider({ children }: PropsWithChildren<NuqsProviderProps>) {
	return <NuqsAdapter>{children}</NuqsAdapter>
}

export default NuqsProvider
