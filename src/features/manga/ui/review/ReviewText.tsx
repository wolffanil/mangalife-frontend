import type { IReview } from '@/shared/types/review.interface'
import { cn } from '@/shared/utils/tw-merge'

interface ReviewTextProps {
	review: IReview
	className?: string
}

function ReviewText({ review, className }: ReviewTextProps) {
	const text = review.text
	return (
		<p
			className={cn(
				'w-full break-words border-b border-black pb-1 font-open_sans-regular text-[16px] leading-tight text-main-color xl:text-[23px]',
				className
			)}
		>
			{text}
		</p>
	)
}

export default ReviewText
