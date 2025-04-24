'use client'

import AuthorItem from './AuthorItem'
import { useGetAuthors } from './hooks/useGetAuthors'

function AuthorsList() {
	const { authors, isLoadingAuthors } = useGetAuthors()

	if (isLoadingAuthors) {
		return <div className='text-[25px] text-main-color'>Загрузка...</div>
	}
	return (
		<div className='mt-[102px] rounded-[30px] border border-main-color bg-yellow'>
			<div className='flex items-center'>
				<div className='flex'>
					<div className='manage__item manage__item-index rounded-tl-[29px]'>
						№
					</div>
					<div className='manage__item manage__item-name'>
						Имя автора
					</div>
					<div className='manage__item manage__item-updatedAt'>
						Последнее обновление
					</div>
					<div className='manage__item manage__item-actions rounded-tr-[29px]'>
						Действия
					</div>
				</div>
			</div>
			<div>
				{authors?.length ? (
					authors.map((author, i) => (
						<AuthorItem
							author={author}
							index={i}
							key={author._id}
							isLastItem={i === authors.length - 1}
						/>
					))
				) : (
					<p className='text-center text-[25px] text-main-color'>
						{' '}
						Авторов нету
					</p>
				)}
			</div>
		</div>
	)
}

export default AuthorsList
