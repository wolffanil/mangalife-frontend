import type { Metadata } from 'next'

import CreateChapter from '@/features/publish/create-chapter/CreateChapter'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Добавление главы',
	...NO_INDEX_PAGE
}

export default function CreateChapterPage() {
	return <CreateChapter />
}
