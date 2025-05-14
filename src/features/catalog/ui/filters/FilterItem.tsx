'use client'

import { useQueryState } from 'nuqs'
import { useCallback } from 'react'

import { SelectItem } from '@/shared/components/elements'

interface FilterItemProps {
	handleCloseModal?: () => void
	isModal: boolean
	title: string
	value: string
	isMulti: boolean
	queryTitle: string
}

function FilterItem({
	handleCloseModal,
	isMulti,
	isModal,
	title,
	queryTitle,
	value
}: FilterItemProps) {
	const [val, setVal] = useQueryState(queryTitle)
	const [_, setFilter] = useQueryState('filter')

	let data = isMulti ? (val?.split(',') ?? []) : null

	const isActive = isMulti ? (data?.includes(value) ?? false) : val === value

	const handleSelect = useCallback(
		(v: string) => {
			setFilter(null)
			if (isMulti) {
				if (isActive) {
					data = data?.filter(g => g !== v) ?? []
				} else {
					data?.push(v)
				}
				setVal(data?.length ? data.join(',') : null)
				return
			}
			setVal(isActive ? null : v)
		},
		[data]
	)

	return (
		<SelectItem
			handleCloseModal={handleCloseModal}
			isModal={isModal}
			title={title}
			value={value}
			isActive={isActive}
			handleSelect={handleSelect}
		/>
	)
}

export default FilterItem
