'use client'

import { MangaItem, Skeleton } from '@/shared/components/elements'

import { useGetSimilar } from '../lib/hooks/useGetSimilar'

function SimilarMangas() {
	const { similarMangas, isLoadingMangas } = useGetSimilar()

	if (!isLoadingMangas && !similarMangas?.length) return null

	return (
		<div className='mt-[40px] flex w-full flex-col items-start xl:mt-[63px] xl:w-[1119px]'>
			<h3 className='font-open_sans-bold text-[16px] font-bold text-main-color xl:text-[24px]'>
				Связано
			</h3>
			<ul className='mt-[30px] grid w-full grid-cols-3 grid-rows-[163px] gap-[10px] xl:mt-[35px] xl:grid-cols-5 xl:grid-rows-[313px] xl:gap-[21px]'>
				{!isLoadingMangas
					? similarMangas?.map(manga => (
							<MangaItem
								manga={manga}
								imageHeight={313}
								imageWidth={207}
								className='max-h-[312px] max-w-[207px] max-sm:h-[163px] max-sm:max-h-[163px] max-sm:max-w-[98px] xl:h-[313px]'
								key={manga._id}
							/>
						))
					: Array.from({ length: 3 }).map((_, i) => (
							<Skeleton
								className='h-full w-full rounded-[10px]'
								key={i}
							/>
						))}
			</ul>
		</div>
	)
}

export default SimilarMangas
