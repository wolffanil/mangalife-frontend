import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'
import type { IManga } from '@/shared/types/manga.interface'
import { cn } from '@/shared/utils/tw-merge'

interface MangaItemProps {
	manga: IManga
	imageWidth: number
	imageHeight: number
	className?: string
	prefetch?: boolean
}

function MangaItem({
	manga,
	className,
	imageHeight,
	imageWidth,
	prefetch = true
}: MangaItemProps) {
	return (
		<li className={className}>
			<Link href={PUBLIC_URL.mangaById(manga._id)} prefetch={prefetch}>
				<Image
					src={manga.poster}
					width={imageWidth}
					height={imageHeight}
					priority
					alt='cover'
					className={cn(
						'block cursor-pointer rounded-[10px] object-cover xl:rounded-[20px]',
						className
					)}
				/>
			</Link>
		</li>
	)
}

export default MangaItem
