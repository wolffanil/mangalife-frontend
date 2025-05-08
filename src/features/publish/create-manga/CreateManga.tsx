import MangaForm from '@/features/manage-manga/MangaForm'

import {
	AuthGuard,
	Title,
	WhiteAndBlackWrapper,
	WhiteWrapper
} from '@/shared/components/elements'

function CreateManga() {
	return (
		<AuthGuard onlyPublish>
			<Title title='Панель загрузки' />
			<WhiteAndBlackWrapper title='Добавить' desc='Управление' />
			<WhiteWrapper isSecond title='Добавить'>
				<MangaForm type='create' />
			</WhiteWrapper>
		</AuthGuard>
	)
}

export default CreateManga
