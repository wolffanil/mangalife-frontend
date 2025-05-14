'use client'

import { useGetGenres } from '@/features/genre/hooks/useGetGenres'

import { Skeleton } from '@/shared/components/elements'
import { cn } from '@/shared/utils/tw-merge'

import type { IFilter } from '../../lib/types'

import FilterItem from './FilterItem'

interface FilterGenresProps extends IFilter {}

function FilterGenres({ isModal, handleCloseModal }: FilterGenresProps) {
	const { genres, isLoadingGenres } = useGetGenres()

	return (
		<div
			className={cn('flex flex-col items-start', {
				'gap-y-[26px]': isModal,
				'gap-y-[36px]': !isModal
			})}
		>
			<h2
				className={cn('font-antelive-bold font-bold', {
					'text-[16px] text-yellow': isModal,
					'text-[24px] text-main-color': !isModal
				})}
			>
				Жанры
			</h2>
			<ul
				className={cn('flex flex-col items-start', {
					'gap-y-[13px]': isModal,
					'gap-y-[15px]': !isModal
				})}
			>
				{isLoadingGenres ? (
					Array.from({ length: 5 }).map((_, i) => (
						<Skeleton
							className={cn('h-[20px] w-[116px]', {
								'h-[27px] w-[172px]': !isModal
							})}
							key={i}
						/>
					))
				) : genres?.length ? (
					genres.map(genre => (
						<FilterItem
							isModal={isModal}
							title={genre.title}
							value={genre._id}
							key={genre._id}
							isMulti
							queryTitle='genres'
						/>
					))
				) : (
					<p
						className={cn(
							'text-center text-[16px] text-main-color',
							{
								'text-[13px] text-yellow': isModal
							}
						)}
					>
						Жанров нету
					</p>
				)}
			</ul>
		</div>
	)
}

export default FilterGenres
