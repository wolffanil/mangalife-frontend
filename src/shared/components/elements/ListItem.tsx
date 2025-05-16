'use client'

import { cn } from '@/shared/utils/tw-merge'

interface ListItemProps {
	handleClick: () => void
	isActive: boolean
	isModal: boolean
	className?: string
	title: string
	count: number
}

function ListItem({
	handleClick,
	isActive,
	isModal,
	className,
	title,
	count
}: ListItemProps) {
	return (
		<li
			role='button'
			tabIndex={-1}
			onClick={handleClick}
			className={cn(
				'flex w-full items-center justify-between rounded-[7px] bg-yellow px-[12px] py-[8px] transition-colors duration-300 ease-in-out xl:px-[17px] xl:py-[4px]',
				{
					'bg-main-color': isModal && !isActive,
					'bg-yellow': isModal && isActive,
					'bg-[#EAE8D3]': isActive && !isModal
				},
				className
			)}
		>
			<p
				className={cn(
					'font-open_sans-regular text-[13px] text-main-color xl:text-[20px]',
					{
						'text-yellow': isModal && !isActive,
						'font-open_sans-semibold font-semibold': isActive
					}
				)}
			>
				{title}
			</p>
			<p
				className={cn(
					'font-open_sans-regular text-[13px] text-main-color xl:text-[20px]',
					{
						'text-yellow': isModal && !isActive
					}
				)}
			>
				{count}
			</p>
		</li>
	)
}

export default ListItem
