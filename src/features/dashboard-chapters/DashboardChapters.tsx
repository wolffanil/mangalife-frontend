import { WhiteWrapper } from '@/shared/components/elements'

import SelectChapter from './SelectChapter'
import SelectPage from './SelectPage'
import ActionsChapter from './action/actionsChapter/ActionsChapter'
import ActionsPage from './action/actionsPage/ActionsPage'
import ChaptersSettings from './action/chapterModal/ChaptersSettings'
import Chapters from './chapters/Chapters'
import UpdateChapter from './form/UpdateChapter'
import Pages from './pages/Pages'

function DashboardChapters() {
	return (
		<WhiteWrapper
			title='Редактирование'
			isSecond
			// subTitleOne='Информация'
			// subTitleTwo='Главы'
		>
			<ChaptersSettings />
			<SelectChapter>
				<ActionsChapter />
				<UpdateChapter />
				<SelectPage>
					<ActionsPage />
				</SelectPage>
			</SelectChapter>
			<div className='flex w-full items-start xl:mt-[50px] xl:gap-x-[39px]'>
				<Chapters />
				<Pages />
			</div>
		</WhiteWrapper>
	)
}

export default DashboardChapters
