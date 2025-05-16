import { AuthGuard, Title, WhiteWrapper } from '@/shared/components/elements'

import PlanSidebar from './ui/PlanSidebar'
import SearchPlan from './ui/SearchPlan'
import PlansList from './ui/manga/PlansList'
import ListButton from './ui/modal/ListButton'
import Profile from './ui/profile/Profile'

function Plans() {
	return (
		<AuthGuard>
			<Title title='Профиль' />
			<WhiteWrapper className='pt-[56px] xl:pt-[177px]'>
				<Profile />
				<ListButton />
				<div className='mt-[30px] flex w-full items-start gap-x-[60px] xl:mt-[87px]'>
					<PlanSidebar />
					<div className='w-full'>
						<SearchPlan />
						<PlansList />
					</div>
				</div>
			</WhiteWrapper>
		</AuthGuard>
	)
}

export default Plans
