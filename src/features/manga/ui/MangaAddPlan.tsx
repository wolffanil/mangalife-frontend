'use client'

import { type ChangeEvent, useState } from 'react'

import { PLAN_STATUS } from '@/features/profile/lib/constants/constants'

import type { PlanStatusType } from '@/shared/types/plan.interface'

import { useCreatePlan } from '../lib/hooks/useCreatePlan'

function MangaAddPlan() {
	const [value, setValue] = useState('')
	const { handleCreatePlan, isCreatingPlan } = useCreatePlan()

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === value || !e.target.value) return
		handleCreatePlan(e.target.value as PlanStatusType)
		setValue(e.target.value)
	}

	return (
		<select
			className='input h-[42px] w-[147px] xl:h-[59px] xl:w-[174px]'
			onChange={handleSelect}
			disabled={isCreatingPlan}
			value={value ?? ''}
		>
			<option value='' disabled>
				+ План
			</option>
			{PLAN_STATUS.map(status => {
				if (status.title === 'Все') return null

				return (
					<option key={status.title} value={status.value}>
						{status.title}
					</option>
				)
			})}
		</select>
	)
}

export default MangaAddPlan
