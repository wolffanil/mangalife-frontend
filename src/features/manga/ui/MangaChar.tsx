import Image from 'next/image'

import { IMangaById } from '@/shared/types/manga.interface'

import MangaCharItem from './MangaCharItem'

interface MangaCharProps {
	manga: IMangaById
}

function MangaChar({ manga }: MangaCharProps) {
	const author = manga.author?.name || 'неизвестно'
	const genres =
		manga.genres.map(genre => genre.title).join(',') || 'неизвестно'
	const ageLimit = manga.ageLimit + '+'
	const year = manga.year.toString()
	const pageCount = manga.pages.toString()
	const rating = manga.rating ?? 0

	return (
		<div className='mt-[40px] flex flex-col items-start xl:mt-[75px]'>
			<h2 className='font-open_sans-bold text-[16px] font-bold text-main-color xl:text-[24px]'>
				Характеристики
			</h2>
			<div className='mt-[30px] flex w-full flex-col items-start xl:mt-[35px] xl:flex-row xl:gap-x-[80px]'>
				<ul className='flex w-full flex-col items-start gap-y-[15px] xl:w-[438px] xl:gap-y-[18px]'>
					<MangaCharItem title='Автор' value={author} />
					<MangaCharItem title='Жанр' value={genres} />
					<MangaCharItem
						title='Возрастное ограничение'
						value={ageLimit}
					/>
				</ul>
				<span className='my-[28px] block h-[1px] w-full bg-main-color xl:my-0 xl:h-[110px] xl:w-[1px]' />
				<ul className='flex w-full flex-col items-start gap-y-[15px] xl:w-[438px] xl:gap-y-[18px]'>
					<MangaCharItem title='Год' value={year} />
					<MangaCharItem
						title='Количество страниц'
						value={pageCount}
					/>
					<MangaCharItem
						title='Оценка'
						isJsx
						value={
							<div className='flex items-center gap-x-[3px] xl:gap-x-[6px]'>
								<p className='manga__char-val'>{rating}</p>
								<Image
									src='/images/star.svg'
									alt='star'
									unoptimized
									width={21}
									height={23}
									className='object-cover max-sm:max-h-[14px] max-sm:max-w-[13px]'
								/>
							</div>
						}
					/>
				</ul>
			</div>
		</div>
	)
}

export default MangaChar
