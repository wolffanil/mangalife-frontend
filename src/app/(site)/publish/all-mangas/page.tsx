import type { Metadata } from 'next'

import AllMangas from '@/features/publish/all-mangas/AllMangas'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Управление',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <AllMangas />
}
