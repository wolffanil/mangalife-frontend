'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes } from 'react'

import { cn } from '@/shared/utils/tw-merge'

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

function BackButton({ className, ...rest }: BackButtonProps) {
	const router = useRouter()

	return (
		<button
			onClick={() => router.back()}
			className={cn(
				'relative flex items-center gap-x-[10px] xl:gap-x-[20px]',
				className
			)}
			{...rest}
		>
			<div className='absolute left-[-17px] top-[-7px] -z-10 h-[35px] w-[35px] rounded-full bg-green xl:left-[-27px] xl:top-[-11px] xl:h-[54px] xl:w-[54px]' />
			<Image
				src='/images/back-line.svg'
				alt='backLine'
				width={39}
				height={11}
				className='xl:h-[19px] xl:w-[60px]'
				unoptimized
			/>
			<p className='font-open_sans-bold text-[16px] font-bold text-yellow xl:text-[24px]'>
				Назад
			</p>
		</button>
	)
}

export default BackButton
