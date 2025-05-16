import type { IPlan } from '@/shared/types/plan.interface'
import { formatDate } from '@/shared/utils/get-format-date'

interface PlanInfoProps {
	plan: IPlan
}

function PlanInfo({ plan }: PlanInfoProps) {
	const manga = plan.manga
	const mangaChapters = manga.chapters ?? 0
	const currentChapter = plan.chapter ?? 1
	const mangaPages = manga.pages ?? 0
	const currentPages = plan.pages ?? 0
	const creadedAt = formatDate(plan.createdAt)

	return (
		<ul className='mt-[20px] flex w-full flex-col items-start gap-y-[15px] xl:mt-[25px] xl:flex-row xl:justify-between'>
			<div className='flex w-full flex-col items-start gap-y-[15px]'>
				<li className='plan__info-item'>
					Глава: {currentChapter}/ {mangaChapters}
				</li>
				<li className='plan__info-item'>
					Прочитанных страниц: {currentPages}/ {mangaPages}
				</li>
			</div>
			<li className='plan__info-item'>Добавлено: {creadedAt}</li>
		</ul>
	)
}

export default PlanInfo
