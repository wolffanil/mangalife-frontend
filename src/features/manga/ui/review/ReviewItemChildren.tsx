import type { IReview } from '@/shared/types/review.interface'

import ReviewInfo from './ReviewInfo'
import ReviewText from './ReviewText'

interface ReviewItemChildrenProps {
	reviews: IReview[]
}

function ReviewItemChildren({ reviews }: ReviewItemChildrenProps) {
	return (
		<ul className='ml-auto mt-[20px] flex w-[245px] flex-col gap-y-[25px] xl:mt-[35px] xl:w-[718px] xl:gap-y-[80px]'>
			{reviews.map(r => (
				<li
					key={r._id}
					className='flex w-full flex-col items-start xl:flex-row'
				>
					<ReviewInfo review={r} isChildren />
					<div className='mt-[18px] flex w-full items-start xl:mt-0 xl:w-[520px]'>
						<ReviewText review={r} />
					</div>
				</li>
			))}
		</ul>
	)
}

export default ReviewItemChildren
