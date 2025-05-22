'use client'

import { useState } from 'react'

import { OnlyUser, Skeleton } from '@/shared/components/elements'
import type { IReview } from '@/shared/types/review.interface'

import { useGetReviewsByParent } from '../../lib/hooks/useGetReviewsByParent'

import FormReviewChildren from './FormReviewChildren'
import ReviewActions from './ReviewActions'
import ReviewInfo from './ReviewInfo'
import ReviewItemChildren from './ReviewItemChildren'
import ReviewText from './ReviewText'

interface ReviewItemProps {
	review: IReview
}

function ReviewItem({ review }: ReviewItemProps) {
	const [isShowAnswers, setShowAnswers] = useState(false)
	const [isFormAnswer, setFormAnswer] = useState(false)

	const { reviews, isLoadingReviews } = useGetReviewsByParent(
		review._id,
		isShowAnswers
	)

	return (
		<div className='flex w-full flex-col items-start'>
			<div className='flex w-full flex-col xl:flex-row xl:justify-between'>
				<ReviewInfo review={review} isChildren={false} />
				<div className='mt-[24px] flex w-full flex-col items-start gap-y-[15px] xl:mt-0 xl:w-[477px]'>
					<ReviewText review={review} />
					<ReviewActions
						setFormAnswer={setFormAnswer}
						setShowAnswers={setShowAnswers}
						isShowAnswers={isShowAnswers}
						isFormAnswer={isFormAnswer}
					/>
				</div>
			</div>

			{isFormAnswer ? (
				<OnlyUser>
					<FormReviewChildren review={review} />
				</OnlyUser>
			) : null}
			{isShowAnswers ? (
				!isLoadingReviews ? (
					reviews?.length ? (
						<ReviewItemChildren reviews={reviews} />
					) : (
						<p className='font-open_sans-regular text-[16px] text-main-color'>
							Нету ответов
						</p>
					)
				) : (
					<div className='] ml-auto mt-[20px] flex flex-col gap-y-[25px]'>
						{Array.from({ length: 3 }).map((_, i) => (
							<Skeleton
								key={i}
								className='h-[92px] w-[245px] rounded-none xl:w-[718px]'
							/>
						))}
					</div>
				)
			) : null}
		</div>
	)
}

export default ReviewItem
