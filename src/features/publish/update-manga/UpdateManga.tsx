import {
	AuthGuard,
	Title,
	WhiteAndBlackWrapper,
	WhiteWrapper
} from '@/shared/components/elements'

import Manga from './Manga'

function UpdateManga() {
	return (
		<AuthGuard onlyPublish>
			<Title title='Панель загрузки' />
			<WhiteAndBlackWrapper title='Редактировать' desc='Управление' />
			<WhiteWrapper isSecond title='Редактирование'>
				<Manga />
			</WhiteWrapper>
		</AuthGuard>
	)
}

export default UpdateManga
