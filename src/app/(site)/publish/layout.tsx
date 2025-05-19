import { type PropsWithChildren } from 'react'

import {
	AuthGuard,
	Title,
	WhiteAndBlackWrapper
} from '@/shared/components/elements'

function PublishLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<AuthGuard onlyPublish>
			<Title title='Панель загрузки' />
			<WhiteAndBlackWrapper title='Добавление' desc='Управление' />
			{children}
		</AuthGuard>
	)
}

export default PublishLayout
