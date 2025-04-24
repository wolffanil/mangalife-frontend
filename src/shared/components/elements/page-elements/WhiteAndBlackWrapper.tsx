import { cn } from '@/shared/utils/tw-merge'

interface WhiteAndBlackWrapperProps {
	title: string
	desc: string
	className?: string
}

function WhiteAndBlackWrapper({
	title,
	desc,
	className
}: WhiteAndBlackWrapperProps) {
	return (
		<>
			<div
				className={cn(
					'relative z-[-2] mt-[43px] h-[88px] rounded-tl-[55px] rounded-tr-[55px] bg-yellow xl:mt-[144px] xl:h-[291px] xl:rounded-tl-[200px] xl:xl:rounded-tr-[200px]',
					className
				)}
			></div>
			<div className='relative z-[-1] mt-[-50px] h-[128px] rounded-[55px] bg-main-color pt-[15px] xl:mt-[-193px] xl:h-[346px] xl:rounded-tl-[200px] xl:rounded-tr-[200px] xl:pl-[98px]'>
				<div className='container ml-[19px] flex items-center'>
					<p className='font-open_sans-semibold text-[16px] font-semibold text-yellow xl:font-open_sans-bold xl:text-[36px] xl:font-bold'>
						{title}
					</p>
					<span className='mx-[30px] h-[57px] w-[1px] bg-yellow xl:mx-[120px] xl:h-[129px]' />
					<p className='font-open_sans-semibold text-[14px] font-semibold text-yellow xl:font-open_sans-bold xl:text-[28px] xl:font-bold'>
						{desc}
					</p>
				</div>
			</div>
		</>
	)
}

export default WhiteAndBlackWrapper
