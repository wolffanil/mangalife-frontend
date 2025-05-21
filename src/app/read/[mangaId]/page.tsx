import type { Metadata } from 'next'

import Read from '@/features/read/ui/Read'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Читать',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <Read />
}
