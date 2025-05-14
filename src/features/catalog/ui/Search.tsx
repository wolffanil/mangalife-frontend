import SearchForm from './SearchForm'

function Search() {
	return (
		<div className='container mt-[81px] flex w-full flex-col items-start gap-y-[35px] xl:mt-[171px] xl:flex-row xl:items-center xl:justify-between xl:gap-y-0'>
			<h1 className='font-antelive-bold text-[24px] font-bold text-yellow xl:text-[48px]'>
				Каталог
			</h1>
			<SearchForm />
		</div>
	)
}

export default Search
