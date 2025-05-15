import Image from 'next/image'

import { MangaCharItem } from '@/shared/components/elements'
import type { IMangaForPublish } from '@/shared/types/manga.interface'

interface MangaElementCharProps {
	manga: IMangaForPublish
}

function MangaElementChar({ manga }: MangaElementCharProps) {
	const author = manga.author?.name || 'неизвестно'
	const genres =
		manga.genres.map(genre => genre.title).join(',') || 'неизвестно'
	const ageLimit = manga.ageLimit + '+'
	const year = manga.year.toString()
	const pageCount = manga.pages.toString()
	const rating = manga.rating ?? 0

	return (
		<div className='mt-[41px] flex w-full flex-col items-start xl:hidden'>
			<h2 className='font-open_sans-bold text-[16px] font-bold text-main-color'>
				Характеристики
			</h2>
			<ul className='mt-[30px] flex w-full flex-col items-start gap-y-[15px]'>
				<MangaCharItem title='Автор' value={author} />
				<MangaCharItem title='Жанр' value={genres} />
				<MangaCharItem title='Количество страниц' value={pageCount} />
				<MangaCharItem
					title='Возрастное ограничение'
					value={ageLimit}
				/>
				<MangaCharItem title='Год' value={year} />
				<MangaCharItem
					title='Оценка'
					isJsx
					value={
						<div className='flex items-center gap-x-[3px]'>
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
	)
}

export default MangaElementChar
