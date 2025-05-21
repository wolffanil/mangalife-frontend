'use client'

import { MangaItem, Skeleton } from '@/shared/components/elements'
import { IManga } from '@/shared/types/manga.interface'

import { useGetMangas } from '../lib/hooks/useGetMangas'
import { useSearchManga } from '../lib/hooks/useSearchManga'

interface MangasProps {
	initialMangas: IManga[]
}

function Mangas({ initialMangas }: MangasProps) {
	const { searchMangas, isSearchingMangas, searchQ } = useSearchManga()
	const { isLoadingMangas, mangas } = useGetMangas(initialMangas)

	const isLoading = isSearchingMangas || isLoadingMangas

	return (
		<ul className='grid w-[980px] grid-cols-3 grid-rows-[163px] gap-[10px] xl:grid-cols-5 xl:grid-rows-[272px] xl:gap-[20px]'>
			{searchQ && !isLoading ? (
				searchMangas?.length ? (
					searchMangas.map(manga => (
						<MangaItem
							manga={manga}
							prefetch={false}
							imageWidth={180}
							imageHeight={272}
							key={manga._id}
							className='max-h-[272px] w-[180px] max-sm:h-[163px] max-sm:w-[98px] xl:h-[272px]'
						/>
					))
				) : (
					<p className='mx-auto block text-center text-[16px] text-main-color xl:text-[24px]'>
						Ничего не найдено
					</p>
				)
			) : null}
			{!isLoading && !searchQ ? (
				mangas?.length ? (
					mangas.map(manga => (
						<MangaItem
							manga={manga}
							prefetch={false}
							imageWidth={180}
							imageHeight={272}
							key={manga._id}
							className='max-h-[272px] w-[180px] max-sm:h-[163px] max-sm:w-[98px] xl:h-[272px]'
						/>
					))
				) : (
					<p className='m-auto text-center text-[16px] text-main-color xl:text-[24px]'>
						манги нету
					</p>
				)
			) : null}
			{isLoading
				? Array.from({ length: 10 }).map((_, i) => (
						<Skeleton
							key={i}
							className='h-[163px] w-[98px] rounded-[10px] xl:h-[272px] xl:w-[180px] xl:rounded-[20px]'
						/>
					))
				: null}
		</ul>
	)
}

export default Mangas
