'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import type { IMangaForPublish } from '@/shared/types/manga.interface'
import { cn } from '@/shared/utils/tw-merge'

interface TitlesItemProps {
	title: string
	value: string
	isModal: boolean
}

function TitlesItem({ title, value, isModal }: TitlesItemProps) {
	const [status, setStatus] = useQueryState('status')

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
		<li
			role='button'
			tabIndex={-1}
			onClick={handleSetStatus}
			className={cn(
				'flex w-full items-center justify-between rounded-[7px] bg-yellow px-[12px] py-[8px] transition-colors duration-300 ease-in-out xl:px-[17px] xl:py-[4px]',
				{
					'bg-main-color': isModal && !isActive,
					'bg-yellow': isModal && isActive,
					'bg-[#EAE8D3]': isActive && !isModal
				}
			)}
		>
			<p
				className={cn(
					'font-open_sans-regular text-[13px] text-main-color xl:text-[20px]',
					{
						'text-yellow': isModal && !isActive,
						'font-open_sans-semibold font-semibold': isActive
					}
				)}
			>
				{title}
			</p>
			<p
				className={cn(
					'font-open_sans-regular text-[13px] text-main-color xl:text-[20px]',
					{
						'text-yellow': isModal && !isActive
					}
				)}
			>
				{count}
			</p>
		</li>
	)
}

export default TitlesItem
