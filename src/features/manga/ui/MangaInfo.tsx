import Image from 'next/image'

import type { IManga } from '@/shared/types/manga.interface'
import { getMediaSource } from '@/shared/utils/get-media-source'

import MangaActions from './MangaActions'

interface MangaInfoProps {
	manga: IManga
}

function MangaInfo({ manga }: MangaInfoProps) {
	const titleRu = manga.titleRu
	const desc = manga.description

	return (
		<div className='mt-[52px] xl:mt-[113px]'>
			<h1 className='font-antelive-bold text-[24px] font-bold text-main-color xl:hidden'>
				{titleRu}
			</h1>
			<div className='mt-[30px] flex w-full gap-x-[20px] xl:mt-0 xl:justify-between xl:gap-x-0'>
				<div className='relative h-[212px] max-h-[212px] w-[147px] max-w-[147px] xl:h-[489px] xl:max-h-[489px] xl:w-[337px] xl:max-w-[337px]'>
					<Image
						src={getMediaSource(manga.poster)}
						alt='poster'
						priority
						fill
						className='rounded-[20px]'
					/>
				</div>
				<div className='mt-[28px] flex w-[146px] flex-col items-start xl:mt-[18px] xl:w-[856px]'>
					<h1 className='hidden font-antelive-bold text-[32px] font-bold text-main-color xl:block'>
						{titleRu}
					</h1>
					<h2 className='font-open_sans-bold text-[15px] font-bold text-main-color xl:mt-[61px] xl:text-[24px]'>
						Описание
					</h2>
					<p className='mt-[20px] w-full break-words font-open_sans-regular text-[13px] leading-tight text-main-color xl:mt-[30px] xl:text-[20px]'>
						{desc}
					</p>
					<MangaActions manga={manga} className='hidden xl:flex' />
				</div>
			</div>
			<MangaActions manga={manga} className='xl:hidden' />
		</div>
	)
}

export default MangaInfo
