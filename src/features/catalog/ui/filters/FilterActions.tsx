'use client'

import { useQueryState } from 'nuqs'
import { useCallback } from 'react'

import { Button } from '@/shared/components/elements'

import type { IFilter } from '../../lib/types'

interface FilterActionsProps extends IFilter {}

function FilterActions({ isModal, handleCloseModal }: FilterActionsProps) {
	const [_, setFilter] = useQueryState('filter')
	const [__, setGenres] = useQueryState('genres')
	const [___, setType] = useQueryState('type')
	const [____, setStatus] = useQueryState('status')
	const [_____, setQ] = useQueryState('q')

	const handleClear = useCallback(() => {
		setGenres(null)
		setType(null)
		setStatus(null)
		setFilter(null)
	}, [])

	const handleAdd = useCallback(() => {
		setQ(null)
		setFilter(String(Date.now()))
		handleCloseModal?.()
	}, [])

	return (
		<div className='flex items-center justify-between'>
			<Button
				onClick={handleAdd}
				className='h-[44px] w-[117px] rounded-[90px] text-[13px]'
			>
				Применить
			</Button>
			<Button
				onClick={handleClear}
				className='h-[44px] w-[117px] rounded-[90px] border border-yellow bg-main-color text-[13px] xl:border-main-color xl:bg-yellow xl:text-main-color'
			>
				Сбросить
			</Button>
		</div>
	)
}

export default FilterActions
