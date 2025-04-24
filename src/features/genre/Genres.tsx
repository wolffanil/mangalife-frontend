'use client'

import GenreForm from './GenreForm'
import GenresList from './GenresList'

function Genres() {
	return (
		<section className='mt-[110px] flex w-[1011px] flex-col items-start'>
			<h2 className='font-open_sans-semibold text-[28px] font-semibold text-main-color'>
				Произведения
				<span className='mx-[27px] font-open_sans-bold text-[36px] font-bold'>
					/
				</span>
				<span className='text-[32px]'> Жанры</span>
			</h2>

			<GenresList />

			<GenreForm />
		</section>
	)
}

export default Genres
