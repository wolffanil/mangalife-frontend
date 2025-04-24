'use client'

import GenreItem from './GenreItem'
import { useGetGenres } from './hooks/useGetGenres'

function GenresList() {
	const { genres, isLoadingGenres } = useGetGenres()

	if (isLoadingGenres) {
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
						Название жанра
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
				{genres?.length ? (
					genres.map((genre, i) => (
						<GenreItem
							genre={genre}
							index={i}
							key={genre._id}
							isLastItem={i === genres.length - 1}
						/>
					))
				) : (
					<p className='text-center text-[25px] text-main-color'>
						{' '}
						Жанров нету
					</p>
				)}
			</div>
		</div>
	)
}

export default GenresList
