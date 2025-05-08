'use client'

import Image from 'next/image'
import { type ButtonHTMLAttributes, type PropsWithChildren, Ref } from 'react'

import { cn } from '@/shared/utils/tw-merge'

interface SettingsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	ref?: Ref<HTMLButtonElement>
}

function SettingsButton({
	children,
	className,
	ref,
	...rest
}: PropsWithChildren<SettingsButtonProps>) {
	return (
		<button
			className={cn(
				'flex h-[46px] w-[168px] items-center justify-between rounded-[90px] bg-main-color px-[20px] py-[14px]'
			)}
			ref={ref ? ref : null}
			{...rest}
		>
			<p className='font-open_sans-regular text-[14px] text-yellow'>
				{children}
			</p>
			<Image
				src='/images/settings.svg'
				unoptimized
				width={19}
				height={19}
				alt='settings'
			/>
		</button>
	)
}

export default SettingsButton
