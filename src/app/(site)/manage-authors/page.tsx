import type { Metadata } from 'next'

import Authors from '@/features/author/Authors'

import {
	AuthGuard,
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
		<AuthGuard onlyPublish>
			<Title title='Панель загрузки' />
			<WhiteAndBlackWrapper title='Добавление' desc='Управление' />
			<WhiteWrapper isSecond title='Управление'>
				<Authors />
			</WhiteWrapper>
		</AuthGuard>
	)
}
