import MangaForm from '@/features/manage-manga/MangaForm'

import { WhiteWrapper } from '@/shared/components/elements'

function CreateManga() {
	return (
		<WhiteWrapper isSecond title='Добавить'>
			<MangaForm type='create' />
		</WhiteWrapper>
	)
}

export default CreateManga
