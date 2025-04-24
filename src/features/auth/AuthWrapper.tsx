import { PropsWithChildren } from 'react'

import { MiniRebbit } from '@/shared/components/elements'
import BackButton from '@/shared/components/elements/BackButton'
import { cn } from '@/shared/utils/tw-merge'

interface AuthWrapperProps {
	className?: string
}

function AuthWrapper({
	className,
	children
}: PropsWithChildren<AuthWrapperProps>) {
	return (
		<section className='flex w-full flex-col items-start pb-[76px] pt-[87px] max-sm:gap-y-[50px] xl:flex-row xl:gap-x-[151px] xl:pb-[99px] xl:pt-[99px]'>
			<BackButton className='xl:mt-[55px]' />
			<div
				className={cn(
					'flex w-full flex-col items-center rounded-[35px] bg-yellow px-[21px] pb-[30px] pt-[31px] xl:w-[794px] xl:rounded-[45px] xl:px-[132px] xl:pb-[80px] xl:pt-[70px]',
					className
				)}
			>
				<MiniRebbit />
				<h1 className='mb-[19px] mt-[30px] text-center font-open_sans-semibold text-[20px] font-bold text-[#313131] xl:mb-[27px] xl:mt-[75px] xl:text-[32px]'>
					Добро пожаловать!
				</h1>
				{children}
			</div>
		</section>
	)
}

export default AuthWrapper
