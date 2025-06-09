import { WhiteWrapper } from '@/shared/components/elements'

import NewMangas from './NewMangas'
import PopularMangas from './PopularMangas'

async function Catalog() {
	//

	return (
		<WhiteWrapper
			title='Каталог'
			className='mt-[76px] max-sm:min-h-[630px] xl:mt-[157px]'
		>
			<div className='mt-[67px] flex w-full flex-col items-start gap-y-[30px] xl:mt-[135px] xl:gap-y-[50px]'>
				<PopularMangas />
				<NewMangas />
			</div>
		</WhiteWrapper>
	)
}

export default Catalog
