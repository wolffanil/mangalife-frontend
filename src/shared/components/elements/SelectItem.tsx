'use client'

import Image from 'next/image'

import { cn } from '@/shared/utils/tw-merge'

interface SelectItemProps {
	isModal: boolean
	handleCloseModal?: () => void
	title: string
	value: string
	handleSelect: (val: string) => void
	isActive: boolean
	className?: string
}

function SelectItem({
	isModal,
	handleSelect,
	handleCloseModal,
	isActive,
	title,
	value,
	className
}: SelectItemProps) {
	return (
		<li
			tabIndex={-1}
			role='button'
			onClick={() => {
				handleSelect(value)
				handleCloseModal?.()
			}}
			className={cn(
				'flex items-center gap-x-[7px] xl:gap-x-[18px]',
				className
			)}
		>
			<div
				className={cn(
					'flex size-[16px] items-center justify-center rounded-full border',
					{
						'bg-yellow': isModal && isActive,
						'border-yellow bg-main-color': isModal && !isActive,
						'border-main-color bg-yellow': !isModal && !isActive,
						'bg-main-color': !isModal && isActive
					}
				)}
			>
				<Image
					src={
						isModal
							? '/images/chapter/chapter-select-mobile.svg'
							: '/images/chapter/chapter-select-desktop.svg'
					}
					alt='icon'
					width={12}
					height={12}
				/>
			</div>
			<div
				className={cn(
					'font-open_sans-regular text-[13px] text-yellow xl:text-[20px]',
					{
						'text-main-color': !isModal
					}
				)}
			>
				{title}
			</div>
		</li>
	)
}

export default SelectItem
