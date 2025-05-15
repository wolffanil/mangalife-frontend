import {
	AuthGuard,
	Title,
	WhiteAndBlackWrapper,
	WhiteWrapper
} from '@/shared/components/elements'

import MangasWrapper from './ui/MangasWrapper'
import TitlesSidebar from './ui/TitlesSidebar'
import ModalButton from './ui/modal/ModalButton'

function AllMangas() {
	return (
		<AuthGuard onlyPublish>
			<Title title='Панель загрузки' />
			<WhiteAndBlackWrapper title='Добавление' desc='Управление' />
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
		</AuthGuard>
	)
}

export default AllMangas
