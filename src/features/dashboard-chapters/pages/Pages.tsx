'use client'

import {
	DndContext,
	PointerSensor,
	TouchSensor,
	closestCenter,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'

import { chapterStore } from '@/shared/store/chapter/chapter.store'

import { useGetPages } from '../hooks/useGetPages'
import { useUpdateNumberPage } from '../hooks/useUpdateNumberPage'

import CreatePage from './CreatePage'
import PageItem from './PageItem'

function Pages() {
	const chapter = chapterStore(state => state.chapter)

	const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

	const { isLoadingChapter, pages } = useGetPages()

	const pagesForDnd = pages?.map(page => ({ ...page, id: page._id })) ?? []

	const { handleUpdateNumber, isUpdatingNumber } = useUpdateNumberPage()

	if (!chapter?._id)
		return (
			<div className='mt-[100px] w-full text-center font-open_sans-semibold text-[13px] font-semibold xl:mt-[370px] xl:text-[24px]'>
				Выберите главу из списка для редактирования
			</div>
		)

	if (isLoadingChapter) {
		return (
			<div className='mt-[100px] w-full text-center font-open_sans-semibold text-[13px] font-semibold xl:mt-[370px] xl:text-[24px]'>
				Загрузка страниц...
			</div>
		)
	}

	return (
		<div className='mt-[35px] flex w-full flex-col items-start xl:mt-0'>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleUpdateNumber}
			>
				<SortableContext
					disabled={isUpdatingNumber}
					items={pagesForDnd}
					strategy={rectSortingStrategy}
				>
					<ul className='grid grid-cols-2 gap-[20px] xl:grid-cols-5'>
						<CreatePage />

						{pages?.length ? (
							pages.map((page, index) => (
								<PageItem key={page._id} page={page} />
							))
						) : (
							<p className='text-center text-[15px] text-main-color'>
								Страниц нету
							</p>
						)}
					</ul>
				</SortableContext>
			</DndContext>
		</div>
	)
}

export default Pages
