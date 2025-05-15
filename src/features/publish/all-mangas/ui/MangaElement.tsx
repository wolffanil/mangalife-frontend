import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'
import type { IMangaForPublish } from '@/shared/types/manga.interface'

import MangaActions from './MangaActions'
import MangaDescDesktop from './MangaDescDesktop'
import MangaDescMobile from './MangaDescMobile'
import MangaElementChar from './MangaElementChar'

interface MangaElementProps {
	manga: IMangaForPublish
}

function MangaElement({ manga }: MangaElementProps) {
	return (
		<li className='flex w-full flex-col items-start border-b border-main-color pb-[40px] xl:pb-[50px]'>
			<div className='flex items-start gap-x-[35px]'>
				<Link prefetch={false} href={PUBLIC_URL.mangaById(manga._id)}>
					<Image
						src={manga.poster}
						alt='poster'
						width={213}
						height={282}
						className='h-[282px] max-h-[282px] max-w-[213px] rounded-[10px] object-cover max-sm:h-[163px] max-sm:max-h-[163px] max-sm:max-w-[98px] xl:rounded-[20px]'
					/>
				</Link>

				<div className='mt-[11px] flex flex-col items-start xl:mt-[28px]'>
					<h3 className='font-antelive-bold text-[20px] font-bold text-main-color'>
						{manga.titleRu}
					</h3>
					<MangaDescDesktop manga={manga} />
					<MangaDescMobile manga={manga} />
					<MangaActions manga={manga} className='hidden xl:flex' />
				</div>
			</div>
			<MangaActions manga={manga} className='xl:hidden' />
			<MangaElementChar manga={manga} />
		</li>
	)
}

export default MangaElement
