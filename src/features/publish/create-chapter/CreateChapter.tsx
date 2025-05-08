import {
	AuthGuard,
	Title,
	WhiteAndBlackWrapper,
	WhiteWrapper
} from '@/shared/components/elements'

import CreateChapterForm from './CreateChapterForm'

function CreateChapter() {
	return (
		<AuthGuard onlyPublish>
			<Title title='Панель загрузки' />
			<WhiteAndBlackWrapper title='Добавить' desc='Управление' />
			<WhiteWrapper
				isSecond
				title='Добавление главы'
				subTitleOne='Одиночная'
				subTitleTwo='Множественная'
			>
				<CreateChapterForm />
			</WhiteWrapper>
		</AuthGuard>
	)
}

export default CreateChapter
