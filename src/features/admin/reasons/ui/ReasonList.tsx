'use client'

import { Skeleton } from '@/shared/components/elements'

import { useGetReasons } from '../lib/hooks/useGetReasons'

import ReasonItem from './ReasonItem'

function ReasonList() {
	const { reasons, isLoadingReasons } = useGetReasons()

	return (
		<ul className='mt-[45px] flex w-full flex-col items-start gap-y-[35px] xl:mt-[89px] xl:gap-y-[40px]'>
			{!isLoadingReasons ? (
				reasons?.length ? (
					reasons.map(reason => (
						<ReasonItem reason={reason} key={reason._id} />
					))
				) : (
					<p className='text-center text-[18px] font-semibold text-main-color xl:text-[24px]'>
						Жалоб нету
					</p>
				)
			) : (
				Array.from({ length: 3 }).map((_, i) => (
					<Skeleton
						key={i}
						className='h-[618px] w-full rounded-[30px] xl:h-[344px]'
					/>
				))
			)}
		</ul>
	)
}

export default ReasonList
