'use client'

import { useCallback, useRef, useState } from 'react'

import { SettingsButton } from '@/shared/components/elements'

import ListModal from './ListModal'

function ListButton() {
	const ref = useRef<HTMLButtonElement>(null)

	const [isOpen, setIsOpen] = useState(false)

	const handleCloseModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<div className='mt-[55px] xl:hidden'>
			<SettingsButton ref={ref} onClick={() => setIsOpen(o => !o)}>
				Списки
			</SettingsButton>
			<ListModal
				buttonElement={ref?.current}
				isOpen={isOpen}
				handleCloseModal={handleCloseModal}
			/>
		</div>
	)
}

export default ListButton
