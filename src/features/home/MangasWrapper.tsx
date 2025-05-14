import { MangaItem } from '@/shared/components/elements'
import type { IManga } from '@/shared/types/manga.interface'
import { cn } from '@/shared/utils/tw-merge'

interface MangasWrapperProps {
	title: string
	mangas: IManga[]
	classNameText?: string
}

function MangasWrapper({ title, mangas, classNameText }: MangasWrapperProps) {
	return (
		<div className='relative flex w-full items-start'>
			<h2
				className={cn(
					'absolute left-0 top-0 translate-x-[-40%] translate-y-[44px] rotate-[270deg] font-antelive-bold text-[16px] font-bold text-main-color xl:translate-y-[58px] xl:text-[24px]',
					classNameText
				)}
			>
				{title}
			</h2>
			<ul className='ml-[47px] grid w-full grid-cols-3 gap-x-[10px] xl:ml-[64px] xl:grid-cols-7 xl:gap-x-[20px]'>
				{mangas?.length ? (
					mangas.map(manga => (
						<MangaItem
							manga={manga}
							key={manga._id}
							imageWidth={180}
							imageHeight={272}
							className='h-[272px] w-[180px] max-w-[180px] max-sm:h-[136px] max-sm:w-[82px]'
						/>
					))
				) : (
					<p className='text-center text-[16px] text-main-color'>
						Манги нету
					</p>
				)}
			</ul>
		</div>
	)
}

export default MangasWrapper
