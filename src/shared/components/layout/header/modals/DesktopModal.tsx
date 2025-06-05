'use client'

import { useCallback, useState } from 'react'

import { cn } from '@/shared/utils/tw-merge'

import UserButton from '../UserButton'

import Logout from './Logout'
import ProfileLink from './ProfileLink'

function DesktopModal() {
	const [isOpen, setIsOpen] = useState(false)

	const onClickButton = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	return (
		<div className='relative'>
			<UserButton onClickButton={onClickButton} />
			<div
				className={cn(
					'absolute bottom-[-200px] right-[-500px] z-20 flex w-[242px] flex-col items-start gap-y-[20px] rounded-[30px] bg-yellow px-[33px] py-[45px] duration-300 ease-in-out',
					{
						'left-0': isOpen,
						'right-[-500px]': !isOpen
					}
				)}
				onClick={() => onClickButton()}
			>
				<ProfileLink onCloseModal={onClickButton} />

				<span className='block h-[1px] w-full bg-main-color' />

				<Logout onCloseModal={onClickButton} />
			</div>
		</div>
	)
}

export default DesktopModal
