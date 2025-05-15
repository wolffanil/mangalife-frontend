'use client'

import { Skeleton } from '@/shared/components/elements'

import { useGetReviewByManga } from '../../lib/hooks/useGetReviewByManga'

import ReviewItem from './ReviewItem'

function Reviews() {
	const { reviews, isLoadingReviews } = useGetReviewByManga()

	return (
		<div className='mt-[80px] flex flex-col items-start gap-y-[30px] xl:mt-[160px] xl:gap-y-[47px]'>
			<h3 className='font-open_sans-bold text-[16px] font-bold text-main-color xl:text-[24px]'>
				Комментарии
			</h3>
			{!isLoadingReviews ? (
				reviews?.length ? (
					<ul className='flex w-full flex-col items-start gap-y-[45px] xl:w-[814px] xl:max-w-[814px] xl:gap-y-[84px]'>
						{reviews.map(review => (
							<ReviewItem review={review} key={review._id} />
						))}
					</ul>
				) : (
					<p className='text-center font-open_sans-semibold text-[18px] font-semibold text-main-color xl:text-[22px]'>
						Нет отзывов
					</p>
				)
			) : (
				<div className='flex w-full flex-col items-start gap-y-[45px] xl:w-[818px] xl:gap-y-[84px]'>
					{Array.from({ length: 3 }).map((_, i) => (
						<Skeleton
							key={i}
							className='h-[100px] w-full rounded-none xl:h-[121px]'
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default Reviews
