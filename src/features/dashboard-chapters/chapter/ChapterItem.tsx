'use client'

import Image from 'next/image'

import { useActionPage } from '@/shared/hooks/page/usePage'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import type { IChapter } from '@/shared/types/chapter.interface'
import { cn } from '@/shared/utils/tw-merge'

interface ChapterItemProps {
	chapter: IChapter
	className?: string
	isModal: boolean
	onClick?: () => void
}

function ChapterItem({
	chapter,
	className,
	isModal,
	onClick
}: ChapterItemProps) {
	const setChapter = chapterStore(state => state.setChapter)
	const chapterId = chapterStore(state => state.chapter?._id)
	const { remove } = useActionPage()

	const isSelectChapter = chapterId === chapter._id

	return (
		<li
			tabIndex={-1}
			role='button'
			onClick={() => {
				remove()
				setChapter(chapter)
				onClick?.()
			}}
			className={cn(
				'flex items-center gap-x-[7px] xl:gap-x-[18px]',
				className
			)}
		>
			<div
				className={cn(
					'flex size-[16px] items-center justify-center rounded-full border',
					{
						'bg-yellow': isModal && isSelectChapter,
						'border-yellow bg-main-color':
							isModal && !isSelectChapter,
						'border-main-color bg-yellow':
							!isModal && !isSelectChapter,
						'bg-main-color': !isModal && isSelectChapter
					}
				)}
			>
				<Image
					src={
						isModal
							? '/images/chapter/chapter-select-mobile.svg'
							: '/images/chapter/chapter-select-desktop.svg'
					}
					alt='icon'
					width={12}
					height={12}
				/>
			</div>
			<div
				className={cn(
					'flex items-center gap-x-[6px] font-open_sans-regular text-[13px] text-yellow xl:gap-x-[11px] xl:text-[20px]',
					{
						'text-main-color': !isModal
					}
				)}
			>
				<p>Том {chapter.tom}</p>
				<p>Глава {chapter.chapter}</p>
			</div>
		</li>
	)
}

export default ChapterItem
