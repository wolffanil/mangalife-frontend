import Image from 'next/image'

import type { IReason } from '@/shared/types/reason.inerface'
import { formatDate } from '@/shared/utils/get-format-date'
import { formatTime } from '@/shared/utils/get-time'

interface ReasonReviewProps {
	reason: IReason
}

function ReasonReview({ reason }: ReasonReviewProps) {
	const review = reason.review.text
	const nickname = reason.user.nickname || 'Пользователь'
	const picture = reason.user.picture
	const createdAtReviewDate = formatDate(reason.review.createdAt)
	const createdAtReviewTime = formatTime(reason.review.createdAt)

	return (
		<div className='flex w-full flex-col items-start border-x-[2px] border-y border-green bg-yellow xl:w-[578px] xl:border-x xl:border-y-[2px]'>
			<div className='flex h-[60px] w-full items-center justify-center border-b-[2px] border-green xl:h-[109px]'>
				<p className='text-center font-open_sans-semibold text-[16px] font-semibold text-main-color xl:text-[32px]'>
					Комментарий
				</p>
			</div>
			<div className='flex min-h-[169px] w-full items-center justify-center px-[20px] xl:min-h-[236px] xl:px-[35px]'>
				<div className='flex w-full items-start gap-x-[11px] xl:gap-x-[41px]'>
					<Image
						src={picture}
						alt='picture'
						width={132}
						height={132}
						className='size-[132px] rounded-full object-cover max-sm:size-[62px]'
					/>
					<div className='flex flex-col items-start'>
						<p className='break-words font-open_sans-regular text-[15px] text-main-color xl:text-[24px]'>
							{nickname}
						</p>
						<p className='mt-[12px] break-words pl-[5px] font-open_sans-regular text-[14px] text-main-color xl:mt-[22px] xl:text-[16px]'>
							{review}
						</p>
						<p className='mt-[10px] break-words font-open_sans-regular text-[15px] text-main-color xl:mt-[22px] xl:text-[16px]'>
							{createdAtReviewDate}, {createdAtReviewTime}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReasonReview
