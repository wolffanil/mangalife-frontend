'use client'

import { useAddChapter } from '../../hooks/useAddChapter'
import { useDeleteChapter } from '../../hooks/useDeleteChapter'

function ActionsChapter() {
	const { handleAddChapter } = useAddChapter()
	const { handleDeleteChapter, isDeletingChapter } = useDeleteChapter()

	return (
		<div className='mt-[30px] flex w-full items-center justify-start space-x-[31px] xl:mt-[137px] xl:justify-end xl:space-x-[44px]'>
			<button
				onClick={handleAddChapter}
				className='cursor-pointer font-open_sans-regular text-[16px] text-main-color xl:text-[20px]'
			>
				Добавить главу
			</button>
			<button
				onClick={handleDeleteChapter}
				disabled={isDeletingChapter}
				className='text cursor-pointer font-open_sans-regular text-[16px] text-[#F46E6E] disabled:cursor-not-allowed disabled:text-red-300 xl:text-[20px]'
			>
				Удалить главу
			</button>
		</div>
	)
}

export default ActionsChapter
