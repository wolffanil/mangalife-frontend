import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'
import type { IPlan } from '@/shared/types/plan.interface'

import PlanActions from './PlanActions'
import PlanInfo from './PlanInfo'

interface PlanItemProps {
	plan: IPlan
}

function PlanItem({ plan }: PlanItemProps) {
	const mangaId = plan.manga._id
	const currentPages = plan.pages
	const title = plan.manga.titleRu
	const posterSrc = plan.manga.poster

	return (
		<li className='flex w-full flex-col items-start border-b border-main-color pb-[40px] xl:pb-[50px]'>
			<div className='flex w-full gap-x-[20px] xl:gap-x-[35px]'>
				<Link href={PUBLIC_URL.mangaById(mangaId)}>
					<Image
						src={posterSrc}
						alt='poster'
						width={186}
						height={246}
						className='h-[246px] max-h-[246px] w-[186px] max-w-[186px] rounded-[10px] object-cover max-sm:h-[163px] max-sm:max-h-[163px] max-sm:w-[98px] max-sm:max-w-[98px]'
					/>
				</Link>

				<div className='flex w-full flex-col items-start pt-[11px] xl:pt-[38px]'>
					<h2 className='font-antelive-bold text-[20px] font-bold text-main-color'>
						{title}
					</h2>
					<PlanInfo plan={plan} />
					<PlanActions
						currentPages={currentPages}
						mangaId={mangaId}
						className='hidden xl:block'
					/>
				</div>
			</div>
			<PlanActions
				currentPages={currentPages}
				mangaId={mangaId}
				className='xl:hidden'
			/>
		</li>
	)
}

export default PlanItem
