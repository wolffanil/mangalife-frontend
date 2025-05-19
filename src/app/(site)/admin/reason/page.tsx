import type { Metadata } from 'next'

import Reasons from '@/features/admin/reasons/ui/Reasons'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Модерация',
	...NO_INDEX_PAGE
}

export default function ReasonPage() {
	return <Reasons />
}
