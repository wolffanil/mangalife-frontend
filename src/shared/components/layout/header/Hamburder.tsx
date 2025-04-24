'use client'

import { useCallback, useState } from 'react'

import MobileModal from './modals/MobileModal'

function Hamburder() {
	const [isOpen, setIsOpen] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<div className='relative flex h-[35px] w-[56px] flex-col items-center gap-y-[10px] xl:hidden'>
			<button
				className='flex h-[35px] w-[56px] flex-col items-center gap-y-[10px] xl:hidden'
				onClick={() => setIsOpen(true)}
			>
				<span className='h-[5px] w-full rounded-[5px] bg-yellow' />
				<span className='h-[5px] w-full rounded-[5px] bg-yellow' />
				<span className='h-[5px] w-full rounded-[5px] bg-yellow' />
			</button>
			<MobileModal isOpen={isOpen} onCloseModal={onCloseModal} />
		</div>
	)
}

export default Hamburder
