import { type PropsWithChildren } from 'react'

import {
	AuthGuard,
	Title,
	WhiteAndBlackWrapper
} from '@/shared/components/elements'

function LayoutAdmin({ children }: PropsWithChildren<unknown>) {
	return (
		<AuthGuard onlyAdmin>
			<Title title='Панель администрации' />
			<WhiteAndBlackWrapper title='Модерация' desc='Заблокированные' />
			{children}
		</AuthGuard>
	)
}

export default LayoutAdmin
