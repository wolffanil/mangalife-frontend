'use client'

import { useQueryState } from 'nuqs'

import { useGetChapterByUser } from '../lib/hooks/useGetChapterByUser'
import { useGetCurrentPages } from '../lib/hooks/useGetCurrentPages'
import { useScroll } from '../lib/hooks/useScroll'

import PageItem from './PageItem'

function PagesList() {
	useScroll()
	const { chapter, isLoadingChapter } = useGetCurrentPages()
	const {
		chapter: currentChapter,
		isLoadingChapter: isLoadingCurrentChapter
	} = useGetChapterByUser()

	const [cn] = useQueryState('cn')
	const isThisChapter = currentChapter?.chapter?.chapter?.toString() === cn

	const existPlan = currentChapter?.plan?._id

	const pages = chapter?.pages ?? []

	const isLoading = isLoadingChapter || isLoadingCurrentChapter

	return (
		<ul className='flex w-full flex-col items-start px-[31px] xl:pl-[525px] xl:pr-[501px]'>
			{!isLoading ? (
				pages.length ? (
					pages.map(page => (
						<PageItem
							page={page}
							key={page._id}
							isSkip={
								!isThisChapter || !existPlan
									? true
									: page.number <=
										  (currentChapter?.plan?.currentPage ??
												0)
										? true
										: false
							}
						/>
					))
				) : (
					<p className='mx-auto block text-[20px] text-yellow xl:text-[24px]'>
						Нету страниц
					</p>
				)
			) : (
				<p className='mx-auto block text-[20px] text-yellow xl:text-[24px]'>
					Загрузка...
				</p>
			)}
		</ul>
	)
}

export default PagesList
