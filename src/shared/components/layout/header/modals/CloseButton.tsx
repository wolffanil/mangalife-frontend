'use client'

import Image from 'next/image'

interface CloseButtonProps {
	onCloseModal: () => void
	isWhite?: boolean
}

function CloseButton({ onCloseModal, isWhite }: CloseButtonProps) {
	return (
		<button
			onClick={() => onCloseModal()}
			className='flex items-center gap-x-[37px]'
		>
			<div className='relative size-[27px] rounded-full bg-green'>
				<Image
					src={
						isWhite
							? '/images/white-line.svg'
							: '/images/header/back-button.svg'
					}
					alt='line'
					width={30}
					height={9}
					unoptimized
					className='absolute right-[-17px] top-[9px] z-[2]'
				/>
			</div>
			<p
				className={`font-open_sans-bold text-[16px] font-bold text-main-color ${isWhite ? 'text-yellow' : ''}`}
			>
				Назад
			</p>
		</button>
	)
}

export default CloseButton
