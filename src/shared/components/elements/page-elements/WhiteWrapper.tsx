import { PropsWithChildren } from 'react'

import { cn } from '@/shared/utils/tw-merge'

import MainContainer from '../MainContainer'

import ReturnButton from './ReturnButton'

interface WhiteWrapperProps {
	withBack?: boolean
	isSecond?: boolean
	className?: string
	title?: string
	subTitleOne?: string
	subTitleTwo?: string
	hiddenBackMobile?: boolean
}

function WhiteWrapper({
	withBack = false,
	isSecond = false,
	subTitleOne,
	subTitleTwo,
	title,
	className,
	hiddenBackMobile,
	children
}: PropsWithChildren<WhiteWrapperProps>) {
	return (
		<div
			className={cn(
				'mt-[43px] min-h-[100vh] w-full rounded-tl-[55px] rounded-tr-[55px] bg-yellow pb-[137px] pt-[50px] xl:mt-[118px] xl:rounded-tl-[188px] xl:rounded-tr-[188px] xl:pb-[304px] xl:pt-[120px]',
				{
					'mt-[-50px] xl:mt-[-184px]': isSecond,
					'pt-[47px] xl:pt-[112px]': withBack
				},
				className
			)}
		>
			<MainContainer>
				{withBack && (
					<div
						className={cn('', {
							'hidden xl:block': hiddenBackMobile
						})}
					>
						<ReturnButton />
					</div>
				)}
				{title && (
					<h1 className='font-antelive-bold text-[16px] font-bold text-main-color xl:text-[40px]'>
						{title}
					</h1>
				)}
				{subTitleOne && subTitleTwo && (
					<div className='mt-[27px] flex w-full items-center gap-x-[10px] xl:mt-[106px] xl:gap-x-[25px]'>
						<h2 className='font-open_sans-semibold text-[16px] font-semibold text-main-color xl:text-[32px]'>
							{subTitleOne}
						</h2>
						<span className='font-open_sans-bold text-[20px] font-bold text-main-color xl:text-[36px]'>
							/
						</span>
						<p className='font-open_sans-semibold text-[13px] font-semibold text-main-color xl:text-[24px]'>
							{subTitleTwo}
						</p>
					</div>
				)}
				{children}
			</MainContainer>
		</div>
	)
}

export default WhiteWrapper
