import { PropsWithChildren } from 'react'

import { cn } from '@/shared/utils/tw-merge'

import MainContainer from '../MainContainer'

import ReturnButton from './ReturnButton'

interface WhiteWrapperProps {
	withBack?: boolean
	isSecond?: boolean
	className?: string
	title?: string
}

function WhiteWrapper({
	withBack = false,
	isSecond = false,
	title,
	className,
	children
}: PropsWithChildren<WhiteWrapperProps>) {
	return (
		<div
			className={cn(
				'mt-[43px] min-h-[300px] w-full rounded-tl-[55px] rounded-tr-[55px] bg-yellow pb-[137px] pt-[50px] xl:mt-[118px] xl:rounded-tl-[188px] xl:rounded-tr-[188px] xl:pb-[304px] xl:pt-[120px]',
				{
					'mt-[-50px] xl:mt-[-184px]': isSecond,
					'pt-[47px] xl:pt-[112px]': withBack
				},
				className
			)}
		>
			<MainContainer>
				{withBack && <ReturnButton />}
				{title && (
					<h1 className='font-antelive-bold text-[40px] font-bold text-main-color'>
						{title}
					</h1>
				)}
				{children}
			</MainContainer>
		</div>
	)
}

export default WhiteWrapper
