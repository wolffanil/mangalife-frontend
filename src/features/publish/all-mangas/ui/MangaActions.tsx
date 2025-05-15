'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/components/elements'
import { USER_URL } from '@/shared/config/url.config'
import type { IMangaForPublish } from '@/shared/types/manga.interface'
import { cn } from '@/shared/utils/tw-merge'

interface MangaActionsProps {
	manga: IMangaForPublish
	className?: string
}

function MangaActions({ manga, className }: MangaActionsProps) {
	const router = useRouter()

	return (
		<div
			className={cn(
				'mt-[27px] flex items-center gap-x-[30px] xl:mt-[48px] xl:gap-x-[35px]',
				className
			)}
		>
			<Button
				onClick={() => router.push(USER_URL.updateManga(manga._id))}
				className='h-[43px] w-[118px] rounded-[90px] text-[12px] xl:h-[49px] xl:w-[172px]'
			>
				Редактировать
			</Button>
			<Button
				onClick={() => router.push(USER_URL.createChapter(manga._id))}
				className='h-[43px] w-[118px] border border-black bg-yellow text-[12px] text-main-color xl:h-[49px] xl:w-[178px]'
			>
				Добавить главу
			</Button>
		</div>
	)
}

export default MangaActions
