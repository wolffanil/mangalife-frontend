import type { IReason } from '@/shared/types/reason.inerface'

import ReasonActions from './ReasonActions'
import ReasonReview from './ReasonReview'
import ReasonText from './ReasonText'

interface ReasonItemProps {
	reason: IReason
}

function ReasonItem({ reason }: ReasonItemProps) {
	return (
		<li className='flex w-full flex-col items-start xl:flex-row'>
			<ReasonText reason={reason} />
			<ReasonReview reason={reason} />
			<ReasonActions reason={reason} />
		</li>
	)
}

export default ReasonItem
