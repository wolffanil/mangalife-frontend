'use client'

import { Skeleton } from '@/shared/components/elements'

import { useGetMyPlans } from '../../lib/hooks/useGetMyPlans'

import PlanItem from './PlanItem'

function PlansList() {
	const { mangas, isLoadingMangas } = useGetMyPlans()

	return (
		<ul className='mt-[55px] flex w-full flex-col items-start gap-y-[20px] xl:mt-[81px] xl:gap-y-[50px]'>
			{!isLoadingMangas ? (
				mangas?.length ? (
					mangas.map(plan => <PlanItem plan={plan} key={plan._id} />)
				) : (
					<p className='mx-auto text-center text-[18px] font-bold text-main-color xl:text-[22px]'>
						Манг нету
					</p>
				)
			) : (
				Array.from({ length: 3 }).map((_, i) => (
					<Skeleton
						key={i}
						className='h-[238px] w-full rounded-none xl:h-[246px]'
					/>
				))
			)}
		</ul>
	)
}

export default PlansList
