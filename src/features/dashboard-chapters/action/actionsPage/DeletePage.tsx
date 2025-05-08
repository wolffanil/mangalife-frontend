'use client'

import Image from 'next/image'

import { useDeletePage } from '../../hooks/useDeletePage'

function DeletePage() {
	const { handleDeletePage, isDeletingPage } = useDeletePage()

	return (
		<button
			onClick={handleDeletePage}
			disabled={isDeletingPage}
			className='action-page__button'
		>
			<div className='action-page__circle'>
				<Image
					src='/images/page/delete-page.svg'
					alt='icon'
					width={17}
					height={17}
					unoptimized
					className='size-[12px] object-cover xl:size-[17px]'
				/>
			</div>
			<p className='action-page__title'>Удалить</p>
		</button>
	)
}

export default DeletePage
