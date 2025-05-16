'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { ListItem } from '@/shared/components/elements'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import type { IMangaForPublish } from '@/shared/types/manga.interface'

interface TitlesItemProps {
	title: string
	value: string
	isModal: boolean
}

function TitlesItem({ title, value, isModal }: TitlesItemProps) {
	const [status, setStatus] = useQueryState('status', {
		defaultValue: 'все'
	})

	const queryClient = useQueryClient()

	const mangas = queryClient.getQueryData([
		QUERY_KEYS.MANGAS_PUBLISH
	]) as IMangaForPublish[]

	const count =
		value !== 'все'
			? (mangas?.filter(manga => manga.status === value)?.length ?? 0)
			: (mangas?.length ?? 0)

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

export default TitlesItem
