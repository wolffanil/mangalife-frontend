'use client'

import Image from 'next/image'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

function SearchPlan() {
	const [q, setSearchQ] = useQueryState('q')
	const [searchTerm, setSerachTerm] = useState('')

	const handleSearch = () => {
		setSearchQ(searchTerm)
	}

	return (
		<div className='flex h-[46px] w-[252px] items-center gap-x-1 rounded-[90px] bg-main-color px-[20px] py-[10px] xl:ml-auto xl:h-[67px] xl:w-[342px] xl:flex-row-reverse xl:px-[20px] xl:pb-[16px] xl:pt-[18px]'>
			<input
				type='text'
				value={searchTerm}
				onChange={e => setSerachTerm(e.target.value)}
				onKeyDown={e => {
					if (e.key === 'Enter') handleSearch()
				}}
				className='w-[97%] bg-main-color font-open_sans-regular text-[14px] text-yellow placeholder:text-yellow xl:text-[16px]'
				placeholder='Поиск'
			/>
			<button onClick={handleSearch}>
				<Image
					src='/images/search-white.svg'
					alt='icon'
					unoptimized
					width={33}
					height={33}
					className='h-[33px] w-[33px] object-cover max-sm:h-[25px] max-sm:w-[25px]'
				/>
			</button>
		</div>
	)
}

export default SearchPlan
