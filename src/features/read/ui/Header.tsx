'use client'

import Image from 'next/image'

import { ReturnButton } from '@/shared/components/elements'
import { USER_URL } from '@/shared/config/url.config'

import { useGetCurrentChapter } from '../lib/hooks/useGetCurrentChapter'
import { useNextChapter } from '../lib/hooks/useNextChapter'
import { usePrevionChapter } from '../lib/hooks/usePrevionChapter'

function Header() {
	const { currentChapter, isExistNext, isLoadingChapters } =
		useGetCurrentChapter()
	const { handlePrevionPage, isLast } = usePrevionChapter()

	const { handleNextChapter } = useNextChapter()

	const titleChapter = isLoadingChapters
		? 'Загрузка...'
		: currentChapter?.name || 'Неизвестно'
	const tom = currentChapter?.tom ?? 1
	const chapter = currentChapter?.chapter ?? 1

	return (
		<div className='items-start bg-yellow px-[31px] pb-[39px] pt-[58px] xl:px-[71px] xl:pb-[20px] xl:pt-[30px]'>
			<div className='flex flex-col items-start gap-y-[20px] xl:flex-row-reverse xl:gap-x-[86px] xl:gap-y-0'>
				<div className='flex flex-col items-start gap-y-[14px] xl:mr-auto xl:gap-y-[16px]'>
					<p className='font-antelive-bold text-[24px] font-bold text-main-color'>
						{titleChapter}
					</p>
					<div className='flex items-center gap-x-[15px]'>
						{!isLast ? (
							<button onClick={handlePrevionPage}>
								<Image
									src='/images/arrow-read.svg'
									alt='arrow'
									unoptimized
									width={24}
									height={24}
									className='size-[24px] rotate-180 object-cover'
								/>
							</button>
						) : null}
						<p className='font-open_sans-regular text-[20px] text-main-color'>
							Том {tom} Глава {chapter}
						</p>
						{isExistNext ? (
							<button onClick={handleNextChapter}>
								<Image
									src='/images/arrow-read.svg'
									alt='arrow'
									unoptimized
									width={24}
									height={24}
									className='size-[24px] object-cover'
								/>
							</button>
						) : null}
					</div>
				</div>
				<ReturnButton withText={false} />
			</div>
		</div>
	)
}

export default Header
