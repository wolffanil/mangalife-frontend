import { cn } from '@/shared/utils/tw-merge'

import { TYPE_MANGA } from '../../lib/constants/constants'
import type { IFilter } from '../../lib/types'

import FilterItem from './FilterItem'

interface FilterTypeProps extends IFilter {}

function FilterType({ isModal, handleCloseModal }: FilterTypeProps) {
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
				Тип
			</h2>
			<ul
				className={cn('flex flex-col items-start', {
					'gap-y-[13px]': isModal,
					'gap-y-[15px]': !isModal
				})}
			>
				{TYPE_MANGA.map(type => (
					<FilterItem
						isModal={isModal}
						title={type.title}
						value={type.value}
						key={type.title}
						isMulti={false}
						queryTitle='type'
					/>
				))}
			</ul>
		</div>
	)
}

export default FilterType
