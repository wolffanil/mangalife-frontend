'use client'

import { Skeleton } from '@/shared/components/elements'

import { useGetMangasPublish } from '../lib/hooks/useGetMangasPublish'

import MangaElement from './MangaElement'

function MangasWrapper() {
	const { mangas, isLoadingMangas } = useGetMangasPublish()

	return (
		<ul className='flex w-full flex-col items-start gap-y-[40px] xl:gap-y-[50px]'>
			{!isLoadingMangas ? (
				mangas?.length ? (
					mangas.map(manga => (
						<MangaElement manga={manga} key={manga._id} />
					))
				) : (
					<p className='mx-auto text-center text-[20px] font-bold text-main-color xl:text-[24px]'>
						Манг нету
					</p>
				)
			) : (
				Array.from({ length: 3 }).map((_, i) => (
					<Skeleton
						className='h-[233px] w-full rounded-none xl:h-[282px]'
						key={i}
					/>
				))
			)}
		</ul>
	)
}

export default MangasWrapper
