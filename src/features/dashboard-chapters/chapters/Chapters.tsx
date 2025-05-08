'use client'

import { Skeleton } from '@/shared/components/elements'

import ChapterItem from '../chapter/ChapterItem'
import { useGetChapters } from '../hooks/useGetChapters'

function Chapters() {
	const { chapters, isLoadingChapters } = useGetChapters()

	return (
		<div className='hidden w-[477px] flex-col items-start gap-y-[40px] rounded-[30px] border border-black bg-yellow px-[25px] py-[34px] xl:flex'>
			<h2 className='font-antelive-bold text-[24px] font-bold text-main-color'>
				Главы
			</h2>
			<ul className='flex min-h-[625px] w-full flex-col items-start gap-y-[28px] overflow-y-scroll'>
				{isLoadingChapters ? (
					Array.from({ length: 7 }).map((_, i) => (
						<Skeleton key={i} />
					))
				) : chapters?.length ? (
					chapters.map(chapter => (
						<ChapterItem
							chapter={chapter}
							isModal={false}
							key={chapter._id}
							className='w-full'
						/>
					))
				) : (
					<div className='m-auto text-center text-[16px] text-main-color'>
						Глав нету
					</div>
				)}
			</ul>
		</div>
	)
}

export default Chapters
