import type { Metadata } from 'next'

import CreateManga from '@/features/publish/create-manga/CreateManga'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Добавление манги',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <CreateManga />
}
