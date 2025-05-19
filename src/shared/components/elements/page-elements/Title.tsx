import { cn } from '@/shared/utils/tw-merge'

interface TitleProps {
	title: string
	className?: string
}

function Title({ className, title }: TitleProps) {
	return (
		<p
			className={cn(
				'container mt-[80px] w-full break-words text-start font-antelive-bold text-[24px] font-bold text-yellow xl:mt-[168px] xl:text-[48px]',
				className
			)}
		>
			{title}
		</p>
	)
}

export default Title
