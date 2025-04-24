import type { Metadata } from 'next'

import AuthorsPageComponent from '@/features/author/AuthorPageComponent'

import {
	Title,
	WhiteAndBlackWrapper,
	WhiteWrapper
} from '@/shared/components/elements'
import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Управление авторами',
	...NO_INDEX_PAGE
}

export default function Page() {
	return (
		<>
			<Title title='Панель загрузки' />
			<WhiteAndBlackWrapper title='Добавление' desc='Управление' />
			<WhiteWrapper isSecond title='Управление'>
				<AuthorsPageComponent />
			</WhiteWrapper>
		</>
	)
}
