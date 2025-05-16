import { cn } from '@/shared/utils/tw-merge'

import { PLAN_SORT } from '../lib/constants/constants'

import SortItem from './SortItem'

interface SortPlanProps {
	isModal: boolean
	handleCloseModal?: () => void
	className?: string
}

function SortPlan({ isModal, handleCloseModal, className }: SortPlanProps) {
	return (
		<div
			className={cn(
				'flex w-full flex-col items-start gap-y-[21px] pb-[25px]',
				{
					'gap-y-[46px] pb-[30px]': !isModal
				},
				className
			)}
		>
			<h3
				className={cn(
					'font-antelive-bold text-[24px] font-bold text-yellow',
					{
						'text-[24px] text-main-color': !isModal
					}
				)}
			>
				Сортировка
			</h3>
			<ul
				className={cn('flex w-full flex-col items-start gap-y-[17px]', {
					'gap-y-[37px]': !isModal
				})}
			>
				{PLAN_SORT.map(sort => (
					<SortItem
						isModal={isModal}
						title={sort.title}
						value={sort.value}
						handleCloseModal={handleCloseModal}
						key={sort.title}
					/>
				))}
			</ul>
		</div>
	)
}

export default SortPlan
