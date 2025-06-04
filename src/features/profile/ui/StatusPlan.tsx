'use client'

import { cn } from '@/shared/utils/tw-merge'

import { PLAN_STATUS } from '../lib/constants/constants'
import { useGetMyPlans } from '../lib/hooks/useGetMyPlans'

import StatusItem from './StatusItem'

interface StatusPlanProps {
	isModal: boolean
	className?: string
}

function StatusPlan({ isModal, className }: StatusPlanProps) {
	const { isLoadingMangas, mangas } = useGetMyPlans()

	return (
		<div
			className={cn(
				'flex w-full flex-col items-start gap-y-[18px] border-b border-yellow pb-[17px]',
				{
					'gap-y-[37px] border-main-color pb-[22px]': !isModal
				},
				className
			)}
		>
			<h3
				className={cn(
					'font-antelive-bold text-[24px] font-bold text-yellow',
					{
						'ml-[15px] text-[24px] text-main-color': !isModal
					}
				)}
			>
				Списки
			</h3>
			<ul
				className={cn('flex w-full flex-col items-start gap-y-[7px]', {
					'gap-y-[16px]': !isModal
				})}
			>
				{PLAN_STATUS.map(plan => (
					<StatusItem
						isModal={isModal}
						title={plan.title}
						value={plan.value}
						key={plan.title}
					/>
				))}
			</ul>
		</div>
	)
}

export default StatusPlan
