import type { IReason } from '@/shared/types/reason.inerface'

interface ReasonTextProps {
	reason: IReason
}

function ReasonText({ reason }: ReasonTextProps) {
	const text = reason.text

	return (
		<div className='flex w-full flex-col items-start rounded-tl-[30px] rounded-tr-[30px] border-[2px] border-b border-green bg-yellow xl:w-[357px] xl:rounded-bl-[30px] xl:rounded-tr-none xl:border-b-[2px] xl:border-r-[1px]'>
			<div className='flex h-[60px] w-full items-center justify-center border-b-[2px] border-green xl:h-[109px]'>
				<p className='text-center font-open_sans-semibold text-[16px] font-semibold text-main-color xl:text-[32px]'>
					Жалоба
				</p>
			</div>
			<div className='flex min-h-[100px] w-full items-center justify-center px-1 py-1 xl:min-h-[236px]'>
				<p className='break-words text-center font-open_sans-regular text-[15px] text-main-color xl:text-[22px]'>
					{text}
				</p>
			</div>
		</div>
	)
}

export default ReasonText
