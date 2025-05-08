'use client'

import { useCallback, useRef, useState } from 'react'

import { SettingsButton } from '@/shared/components/elements'

import ChaptersModal from './ChaptersModal'

function ChaptersSettings() {
	const ref = useRef<HTMLButtonElement>(null)
	const [isOpen, setIsOpen] = useState(false)

	const setIsClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<div className='mt-[48px] xl:hidden'>
			<SettingsButton ref={ref} onClick={() => setIsOpen(o => !o)}>
				Главы
			</SettingsButton>
			<ChaptersModal
				buttonElement={ref?.current}
				isOpen={isOpen}
				setCloseOpen={setIsClose}
			/>
		</div>
	)
}

export default ChaptersSettings
