'use client'

import { Skeleton } from '@/shared/components/elements'
import { cn } from '@/shared/utils/tw-merge'

import ChapterItem from '../../chapter/ChapterItem'
import { useGetChapters } from '../../hooks/useGetChapters'

interface ChaptersModalProps {
	isOpen: boolean
	setCloseOpen: () => void
	buttonElement: HTMLButtonElement | null
}

function ChaptersModal({
	isOpen,
	setCloseOpen,
	buttonElement
}: ChaptersModalProps) {
	const { chapters, isLoadingChapters } = useGetChapters()

	const left = buttonElement?.getBoundingClientRect()?.left

	return (
		<div
			className={cn(
				`absolute flex max-h-[470px] min-h-[250px] w-[250px] flex-col items-start overflow-y-scroll rounded-[20px] bg-main-color p-[20px] left-[${left + 'px'}] z-10 mt-[15px] transform duration-300 ease-out xl:hidden`,
				{
					'left-[-500px]': !isOpen
				}
			)}
			onClick={() => setCloseOpen()}
		>
			<h2 className='font-antelive-bold text-[20px] font-bold text-yellow'>
				Главы
			</h2>
			<ul className='mt-[21px] flex flex-col items-start gap-y-[17px]'>
				{isLoadingChapters ? (
					Array.from({ length: 7 }).map((_, i) => (
						<Skeleton key={i} />
					))
				) : chapters?.length ? (
					chapters.map(chapter => (
						<ChapterItem
							isModal
							chapter={chapter}
							onClick={() => setCloseOpen()}
							key={chapter._id}
						/>
					))
				) : (
					<div className='m-auto text-center text-[16px] text-yellow'>
						Глав нету
					</div>
				)}
			</ul>
		</div>
	)
}

export default ChaptersModal
