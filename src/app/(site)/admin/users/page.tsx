import type { Metadata } from 'next'

import Users from '@/features/admin/users/ui/Users'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Заблокированные',
	...NO_INDEX_PAGE
}

export default function UsersPage() {
	return <Users />
}
