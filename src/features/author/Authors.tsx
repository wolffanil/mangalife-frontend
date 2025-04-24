'use client'

import AuthorForm from './AuthorForm'
import AuthorsList from './AuthorsList'

function Authors() {
	return (
		<section className='mt-[110px] flex w-[1011px] flex-col items-start'>
			<h2 className='font-open_sans-semibold text-[28px] font-semibold text-main-color'>
				Произведения
				<span className='mx-[27px] font-open_sans-bold text-[36px] font-bold'>
					/
				</span>
				<span className='text-[32px]'> Авторы</span>
			</h2>

			<AuthorsList />

			<AuthorForm />
		</section>
	)
}

export default Authors
