import { WhiteWrapper } from '@/shared/components/elements'
import {
	fetchNewMangas,
	fetchPopularMangas
} from '@/shared/services/fetchMangas'

import NewMangas from './NewMangas'
import PopularMangas from './PopularMangas'

async function Catalog() {
	const [newMangas, popularMangas] = await Promise.all([
		fetchNewMangas(),
		fetchPopularMangas()
	])

	return (
		<WhiteWrapper title='Каталог' className='mt-[76px] xl:mt-[157px]'>
			<div className='mt-[67px] flex w-full flex-col items-start gap-y-[30px] xl:mt-[135px] xl:gap-y-[50px]'>
				<PopularMangas mangas={popularMangas} />
				<NewMangas mangas={newMangas} />
			</div>
		</WhiteWrapper>
	)
}

export default Catalog
