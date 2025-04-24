'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { cn } from '@/shared/utils/tw-merge'

interface ReturnButtonProps {
	className?: string
}

function ReturnButton({ className }: ReturnButtonProps) {
	const router = useRouter()

	return (
		<button
			className={cn(
				'flex items-center gap-x-[31px] xl:gap-x-[53px]',
				className
			)}
			onClick={() => router.back()}
		>
			<div className='relative size-[35px] rounded-full bg-green xl:size-[54px]'>
				<Image
					src='/images/header/back-button.svg'
					alt='line'
					width={60}
					height={18}
					unoptimized
					priority
					className='absolute right-[-21px] top-[11px] z-[2] h-[11px] w-[39px] xl:right-[-33px] xl:top-[18px] xl:h-[19px] xl:w-[60px]'
				/>
			</div>
			<p className='font-open_sans-bold text-[16px] font-bold text-main-color xl:text-[24px]'>
				Назад
			</p>
		</button>
	)
}

export default ReturnButton
