import { WhiteWrapper } from '@/shared/components/elements'
import type { IManga } from '@/shared/types/manga.interface'

import Mangas from './ui/Mangas'
import Search from './ui/Search'
import FilterButton from './ui/filters/FilterButton'
import FilterSidebar from './ui/filters/FilterSidebar'

function Catalog() {
	return (
		<>
			<Search />
			<WhiteWrapper
				withBack
				hiddenBackMobile
				className='mt-[75px] pt-[55px] xl:mt-[124px] xl:pt-[110px]'
			>
				<FilterButton />
				<div className='mt-[69px] flex w-full justify-between'>
					<FilterSidebar />
					<Mangas />
				</div>
			</WhiteWrapper>
		</>
	)
}

export default Catalog
