import { WhiteWrapper } from '@/shared/components/elements'

import CreateChapterForm from './CreateChapterForm'

function CreateChapter() {
	return (
		<WhiteWrapper
			isSecond
			title='Добавление главы'
			subTitleOne='Одиночная'
			subTitleTwo='Множественная'
		>
			<CreateChapterForm />
		</WhiteWrapper>
	)
}

export default CreateChapter
