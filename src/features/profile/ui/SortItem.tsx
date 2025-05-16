'use client'

import { useQueryState } from 'nuqs'
import { useCallback } from 'react'

import { SelectItem } from '@/shared/components/elements'

interface SortItemProps {
	handleCloseModal?: () => void
	isModal: boolean
	title: string
	value: string
}

function SortItem({ handleCloseModal, isModal, title, value }: SortItemProps) {
	const [sortBy, setSortBy] = useQueryState('sortBy')

	const isActive = sortBy === value

	const handleSelectSort = useCallback((v: string) => {
		setSortBy(v)
	}, [])

	return (
		<SelectItem
			handleCloseModal={handleCloseModal}
			isActive={isActive}
			handleSelect={handleSelectSort}
			isModal={isModal}
			title={title}
			value={value}
		/>
	)
}

export default SortItem
