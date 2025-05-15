import Image from 'next/image'

import type { IMangaForPublish } from '@/shared/types/manga.interface'
import { formatDate } from '@/shared/utils/get-format-date'

interface MangaDescDesktopProps {
	manga: IMangaForPublish
}

function MangaDescDesktop({ manga }: MangaDescDesktopProps) {
	const author = manga.author?.name || 'неизвестно'
	const genres =
		manga.genres.map(genre => genre.title).join(',') || 'неизвестно'
	const ageLimit = manga.ageLimit + '+'
	const year = manga.year.toString()
	const pageCount = manga.pages.toString()
	const rating = manga.rating ?? 0
	const status = manga.status
	const chapterCount = manga.chapters ?? 0

	return (
		<div className='mt-[35px] hidden w-full items-start gap-x-[75px] xl:flex'>
			<ul className='flex min-w-[105px] max-w-[140px] flex-col items-start gap-y-[15px]'>
				<li className='manga__desc-item'>Автор: {author}</li>
				<li className='manga__desc-item'>Жанр: {genres}</li>
				<li className='manga__desc-item'>Статус: {status}</li>
			</ul>
			<ul className='flex min-w-[105px] max-w-[120px] flex-col items-start gap-y-[15px]'>
				<li className='manga__desc-item'>Главы: {chapterCount}</li>
				<li className='manga__desc-item'>Страниц: {pageCount}</li>
				<li className='manga__desc-item flex items-center'>
					Оценка:
					<div className='ml-1 flex items-center gap-x-[2px]'>
						{rating}{' '}
						<Image
							src='/images/star.svg'
							alt='star'
							unoptimized
							width={17}
							height={18}
							className='h-[18px] w-[17px] object-cover'
						/>
					</div>
				</li>
			</ul>
			<ul className='flex min-w-[105px] max-w-[250px] flex-col items-start gap-y-[15px]'>
				<li className='manga__desc-item'>
					Возрастное ограничение: {ageLimit}
				</li>
				<li className='manga__desc-item'>Год: {year}</li>
				<li className='manga__desc-item'>
					Добавлено: {formatDate(manga.createdAt)}
				</li>
			</ul>
		</div>
	)
}

export default MangaDescDesktop
