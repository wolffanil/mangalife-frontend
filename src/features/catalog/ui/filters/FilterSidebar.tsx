import FilterActions from './FilterActions'
import FilterGenres from './FilterGenres'
import FilterStatus from './FilterStatus'
import FilterType from './FilterType'

function FilterSidebar() {
	return (
		<div className='hidden w-[242px] flex-col items-start xl:flex'>
			<h2 className='font-antelive-bold text-[32px] font-bold text-main-color'>
				Фильтры
			</h2>
			<div className='mt-[52px]'>
				<FilterGenres isModal={false} />
			</div>
			<div className='mt-[20px] h-[1px] w-full bg-main-color' />
			<div className='mt-[20px]'>
				<FilterType isModal={false} />
			</div>
			<div className='mt-[40px]'>
				<FilterStatus isModal={false} />
			</div>
			<div className='mt-[42px] w-full'>
				<FilterActions isModal={false} />
			</div>
		</div>
	)
}

export default FilterSidebar
