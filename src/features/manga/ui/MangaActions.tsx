'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/components/elements'
import { USER_URL } from '@/shared/config/url.config'
import type { IManga } from '@/shared/types/manga.interface'
import { cn } from '@/shared/utils/tw-merge'

interface MangaActionsProps {
	manga: IManga
	className?: string
}

function MangaActions({ manga, className }: MangaActionsProps) {
	const router = useRouter()

	return (
		<div
			className={cn(
				'mt-[30px] flex flex-col items-start xl:mt-[93px] xl:flex-row',
				className
			)}
		>
			<Button
				className='h-[42px] w-[147px] rounded-[90px] text-[14px] xl:h-[59px] xl:w-[174px] xl:text-[19px]'
				onClick={() => router.push(USER_URL.readManga(manga._id))}
			>
				Читать
			</Button>
		</div>
	)
}

export default MangaActions
