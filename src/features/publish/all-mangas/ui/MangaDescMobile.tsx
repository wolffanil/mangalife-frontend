import type { IMangaForPublish } from '@/shared/types/manga.interface'
import { formatDate } from '@/shared/utils/get-format-date'

interface MangaDescMobileProps {
	manga: IMangaForPublish
}

function MangaDescMobile({ manga }: MangaDescMobileProps) {
	const chaptersCount = manga.chapters ?? 0
	const status = manga.status
	const createdAt = formatDate(manga.createdAt)

	return (
		<div className='mt-[20px] flex flex-col items-start gap-y-[15px] xl:hidden'>
			<p className='manga__char-val'>Главы: {chaptersCount}</p>
			<p className='manga__char-val'>Статус: {status}</p>
			<p className='manga__char-val'>Добавлено: {createdAt}</p>
		</div>
	)
}

export default MangaDescMobile
