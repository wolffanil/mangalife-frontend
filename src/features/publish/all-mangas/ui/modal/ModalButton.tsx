'use client'

import { useCallback, useRef, useState } from 'react'

import { SettingsButton } from '@/shared/components/elements'

import TitlesModal from './TitlesModal'

function ModalButton() {
	const ref = useRef<HTMLButtonElement>(null)
	const [isOpen, setIsOpen] = useState(false)

	const handleCloseModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<div className='mt-[44px] xl:hidden'>
			<SettingsButton ref={ref} onClick={() => setIsOpen(o => !o)}>
				Тайтлы
			</SettingsButton>
			<TitlesModal
				isOpen={isOpen}
				buttonElement={ref?.current}
				handleCloseModal={handleCloseModal}
			/>
		</div>
	)
}

export default ModalButton
