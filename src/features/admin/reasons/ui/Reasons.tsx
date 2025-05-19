import { WhiteWrapper } from '@/shared/components/elements'

import ReasonList from './ReasonList'

function Reasons() {
	return (
		<WhiteWrapper
			title='Модерация'
			isSecond
			className='pt-[55px] xl:pt-[147px]'
		>
			<ReasonList />
		</WhiteWrapper>
	)
}

export default Reasons
