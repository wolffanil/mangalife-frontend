'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Image from 'next/image'

import { useActionPage, usePage } from '@/shared/hooks/page/usePage'
import type { IPage } from '@/shared/types/page.interface'
import { getMediaSource } from '@/shared/utils/get-media-source'
import { cn } from '@/shared/utils/tw-merge'

interface PageItemProps {
	page: IPage
}

function PageItem({ page }: PageItemProps) {
	const { page: selectPage } = usePage()
	const { setPage } = useActionPage()

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: page._id
		})

	const isSelectPage = page._id === selectPage?._id

	return (
		<li
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={{
				transform: CSS.Transform.toString(transform),
				transition,
				touchAction: 'none'
			}}
			className='mb-[20px] h-[165px] max-h-[165px] w-[125px] xl:h-[249px] xl:max-h-[249px] xl:w-[187px]'
			onDoubleClick={() => setPage(page)}
			tabIndex={-1}
			role='button'
		>
			<div className='rounded-tl-[20px] rounded-tr-[20px] border-l border-r border-t border-black pb-[4px] pl-[17px] pt-[11px] xl:pb-[9px]'>
				<div
					className={cn(
						'mr-auto flex size-[16px] max-h-[16px] w-full max-w-[16px] items-center justify-center rounded-full border',
						{
							'border-main-color bg-yellow': !isSelectPage,
							'bg-main-color': isSelectPage
						}
					)}
				>
					<Image
						src={'/images/chapter/chapter-select-desktop.svg'}
						alt='icon'
						width={12}
						height={12}
					/>
				</div>
			</div>
			<div className='h-full w-full rounded-bl-[20px] rounded-br-[20px] xl:h-[215px] xl:max-h-[215px]'>
				<Image
					src={getMediaSource(page.image)}
					alt='image'
					width={187}
					height={215}
					className='h-[154px] max-h-[154px] rounded-bl-[20px] rounded-br-[20px] object-cover xl:h-[215px] xl:max-h-[215px]'
				/>
			</div>
		</li>
	)
}

export default PageItem
