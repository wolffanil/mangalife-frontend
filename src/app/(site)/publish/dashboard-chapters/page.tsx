import type { Metadata } from 'next'

import DashboardChapters from '@/features/dashboard-chapters/DashboardChapters'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Панель глав',
	...NO_INDEX_PAGE
}

export default function DashboardChaptersPage() {
	return <DashboardChapters />
}
