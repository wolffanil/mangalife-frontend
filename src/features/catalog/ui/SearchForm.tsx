'use client'

import Image from 'next/image'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

function SearchForm() {
	const [searchTerm, setSearchTerm] = useState('')

	const [_, setQ] = useQueryState('q')
	const [__, setFilter] = useQueryState('filter')

	const handleSearch = () => {
		if (searchTerm?.length < 2) return
		setFilter(null)
		setQ(searchTerm)
	}

	return (
		<div className='flex h-[46px] w-[252px] items-center justify-between rounded-[90px] bg-yellow px-[20px] py-[10px] xl:h-[67px] xl:w-[478px] xl:px-[20px] xl:pb-[14px] xl:pt-[20px]'>
			<input
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder='Поиск'
				className='w-[97%] bg-yellow font-open_sans-regular text-[14px] text-main-color xl:text-[20px]'
				onKeyDown={e => {
					if (e.key === 'Enter') handleSearch()
				}}
			/>

			<button
				onClick={handleSearch}
				disabled={searchTerm?.length < 2}
				className='disabled:cursor-not-allowed'
			>
				<Image
					src='/images/search.svg'
					alt='search'
					unoptimized
					width={32}
					height={33}
					className='max-h-[25px] max-w-[23px] xl:max-h-[33px] xl:max-w-[32px]'
				/>
			</button>
		</div>
	)
}

export default SearchForm
