'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'

import { ListItem } from '@/shared/components/elements'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import type { IPlan } from '@/shared/types/plan.interface'

interface StatusItemProps {
	title: string
	value: string
	isModal: boolean
}

function StatusItem({ title, value, isModal }: StatusItemProps) {
	const [status, setStatus] = useQueryState('status', {
		defaultValue: 'Все'
	})
	const [searchQ] = useQueryState('q')
	const [sort] = useQueryState('sortBy')
	const searchQCurrent = searchQ ? searchQ : ''
	const sortCurrent = sort ? sort : ''

	const queryClient = useQueryClient()

	const plans = queryClient.getQueryData([
		QUERY_KEYS.GET_MY_PLANS,
		searchQCurrent,
		sortCurrent
	]) as IPlan[]

	const count =
		value !== 'Все'
			? (plans?.filter(plan => plan.status === value)?.length ?? 0)
			: (plans?.length ?? 0)

	const isActive = status === value

	const handleSetStatus = () => {
		setStatus(value)
	}

	return (
		<ListItem
			handleClick={handleSetStatus}
			isActive={isActive}
			isModal={isModal}
			count={count}
			title={title}
		/>
	)
}

export default StatusItem
