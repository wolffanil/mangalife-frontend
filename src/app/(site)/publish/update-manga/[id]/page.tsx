import type { Metadata } from 'next'

import UpdateManga from '@/features/publish/update-manga/UpdateManga'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Редактировать мангу',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <UpdateManga />
}
