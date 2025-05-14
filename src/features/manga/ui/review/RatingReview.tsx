'use client'

import { type Dispatch, type SetStateAction } from 'react'
import { Rating } from 'react-simple-star-rating'

import EmptyStar from './EmptyStar'
import FillStar from './FillStar'

interface RatingReviewProps {
	rating: number
	setRating: Dispatch<SetStateAction<number>>
	isLoading: boolean
}

function RatingReview({ rating, setRating, isLoading }: RatingReviewProps) {
	const handleRating = (rate: number) => {
		if (isLoading) return
		setRating(rate)
	}

	return (
		<div className='flex items-end gap-x-[5px] xl:gap-x-[9px]'>
			<p className='font-open_sans-regular text-[13px] text-main-color xl:text-[20px]'>
				Оценка:
			</p>
			<div className='w-[98px] touch-none xl:w-[164px]'>
				<Rating
					onClick={handleRating}
					disableFillHover={isLoading}
					initialValue={rating}
					fillIcon={<FillStar />}
					emptyIcon={<EmptyStar />}
				/>
			</div>
		</div>
	)
}

export default RatingReview
