import Image from 'next/image'

import { IReview } from '@/shared/types/review.interface'
import { formatDate } from '@/shared/utils/get-format-date'
import { getMediaSource } from '@/shared/utils/get-media-source'
import { cn } from '@/shared/utils/tw-merge'

interface ReviewInfoProps {
	isChildren: boolean
	review: IReview
	className?: string
}

function ReviewInfo({ review, isChildren, className }: ReviewInfoProps) {
	const picture = review.user.picture
	const nickname = review.user?.nickname ?? 'неизвестный'
	const countRating = review?.rating
	const updatedAt = review.updatedAt

	return (
		<div
			className={cn(
				'flex w-full items-start gap-x-[12px] xl:w-[260px] xl:gap-x-[15px]',
				className
			)}
		>
			<Image
				src={getMediaSource(picture)}
				alt='picture'
				priority
				width={81}
				height={81}
				className='h-[81px] max-h-[81px] max-w-[81px] rounded-full max-sm:h-[55px] max-sm:max-h-[55px] max-sm:max-w-[55px]'
			/>
			<div className='flex flex-col items-start gap-y-[15px] xl:gap-y-[19px]'>
				<div className='flex items-start gap-x-[15px] xl:flex-col xl:gap-x-0 xl:gap-y-[20px]'>
					<p className='font-open_sans-regular text-[13px] text-main-color xl:text-[20px]'>
						{nickname}
					</p>
					{!isChildren ? (
						<div className='flex items-center gap-x-[6px] xl:gap-x-[10px]'>
							{Array.from({ length: countRating ?? 0 }).map(
								(_, i) => (
									<Image
										src='/images/star.svg'
										alt='star'
										unoptimized
										key={i}
										width={25}
										height={27}
										className='max-sm:h-[16px] max-sm:w-[15px]'
									/>
								)
							)}
						</div>
					) : null}
				</div>
				<p className='font-open_sans-regular text-[13px] text-main-color xl:text-[20px]'>
					{formatDate(updatedAt)}
				</p>
			</div>
		</div>
	)
}

export default ReviewInfo
