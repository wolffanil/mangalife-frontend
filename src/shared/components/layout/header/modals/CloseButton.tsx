'use client'

import Image from 'next/image'

interface CloseButtonProps {
	onCloseModal: () => void
}

function CloseButton({ onCloseModal }: CloseButtonProps) {
	return (
		<button
			onClick={() => onCloseModal()}
			className='flex items-center gap-x-[37px]'
		>
			<div className='relative size-[27px] rounded-full bg-green'>
				<Image
					src='/images/header/back-button.svg'
					alt='line'
					width={30}
					height={9}
					className='absolute right-[-17px] top-[9px] z-[2]'
				/>
			</div>
			<p className='font-open_sans-bold text-[16px] font-bold text-main-color'>
				Назад
			</p>
		</button>
	)
}

export default CloseButton
