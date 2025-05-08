import { cn } from '@/shared/utils/tw-merge'

interface SkeletonProps {
	className?: string
}

function Skeleton({ className }: SkeletonProps) {
	return (
		<li
			className={cn(
				'h-[19px] w-[109px] rounded-[60px] bg-yellow',
				className
			)}
		/>
	)
}

export default Skeleton
