import { WhiteWrapper } from '@/shared/components/elements'

import MangasWrapper from './ui/MangasWrapper'
import TitlesSidebar from './ui/TitlesSidebar'
import ModalButton from './ui/modal/ModalButton'

function AllMangas() {
	return (
		<WhiteWrapper
			title='Управление'
			hiddenSubTitleMobile
			subTitleOne='Произведения'
			subTitleTwo='Авторы'
			isSecond
		>
			<ModalButton />
			<div className='mt-[55px] flex items-start gap-x-[60px] xl:mt-[94px]'>
				<TitlesSidebar />
				<MangasWrapper />
			</div>
		</WhiteWrapper>
	)
}

export default AllMangas
