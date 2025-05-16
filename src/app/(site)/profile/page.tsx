import type { Metadata } from 'next'

import Plans from '@/features/profile/Plans'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Профиль',
	...NO_INDEX_PAGE
}

export default function ProfilePage() {
	return <Plans />
}
