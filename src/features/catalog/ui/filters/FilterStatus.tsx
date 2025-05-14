import { cn } from '@/shared/utils/tw-merge'

import { STATUS_MANGA } from '../../lib/constants/constants'
import type { IFilter } from '../../lib/types'

import FilterItem from './FilterItem'

interface FilterStatusProps extends IFilter {}

function FilterStatus({ isModal, handleCloseModal }: FilterStatusProps) {
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
				Статус
			</h2>
			<ul
				className={cn('flex flex-col items-start', {
					'gap-y-[13px]': isModal,
					'gap-y-[15px]': !isModal
				})}
			>
				{STATUS_MANGA.map(status => (
					<FilterItem
						isModal={isModal}
						title={status.title}
						value={status.value}
						key={status.title}
						queryTitle='status'
						isMulti={false}
					/>
				))}
			</ul>
		</div>
	)
}

export default FilterStatus
