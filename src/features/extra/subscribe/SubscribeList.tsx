import { SUBSCRIBE_LIST_POSSIBILITES } from './subscribe-list.constants'

function SubscribeList() {
	return (
		<ul className='w-ful mt-[35px] flex flex-col items-start gap-y-[20px] xl:mt-[33px] xl:gap-y-[15px] xl:pl-[32px]'>
			{SUBSCRIBE_LIST_POSSIBILITES.map((s, i) => (
				<li
					key={i}
					className='flex items-start gap-x-[31px] xl:gap-x-[35px]'
				>
					<span className='mt-[9px] h-[17px] min-w-[17px] rounded-full bg-[#D6A0C8] xl:size-[20px]' />

					<p className='font-open_sans-bold text-[13px] leading-[30px] text-yellow xl:text-[20px] xl:leading-normal'>
						{s}
					</p>
				</li>
			))}
		</ul>
	)
}

export default SubscribeList
