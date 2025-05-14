'use client'

import { useCallback, useRef, useState } from 'react'

import { SettingsButton } from '@/shared/components/elements'

import FiltersModal from './FiltersModal'

function FilterButton() {
	const ref = useRef<HTMLButtonElement>(null)
	const [isOpen, setIsOpen] = useState(false)

	const handleCloseModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<div className='xl:hidden'>
			<SettingsButton ref={ref} onClick={() => setIsOpen(o => !o)}>
				Фильтры
			</SettingsButton>
			<FiltersModal
				buttonElement={ref?.current}
				handleCloseModal={handleCloseModal}
				isOpen={isOpen}
			/>
		</div>
	)
}

export default FilterButton
