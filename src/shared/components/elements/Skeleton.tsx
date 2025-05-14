import { cn } from '@/shared/utils/tw-merge'

interface SkeletonProps {
	className?: string
}

function Skeleton({ className }: SkeletonProps) {
	return (
		<li
			className={cn(
				'h-[19px] w-[109px] rounded-[60px] bg-[#D9D9D9]',
				className
			)}
		/>
	)
}

export default Skeleton
