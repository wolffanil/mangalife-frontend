import { STATUS } from '../lib/constants/constants'

import TitlesItem from './TitlesItem'

function TitlesSidebar() {
	return (
		<div className='hidden min-w-[381px] max-w-[381px] flex-col items-start rounded-[30px] border border-black bg-yellow px-[25px] py-[35px] xl:flex'>
			<h3 className='font-antelive-bold text-[24px] font-bold text-main-color'>
				Тайтлы
			</h3>
			<ul className='mt-[37px] flex w-full flex-col items-start gap-y-[18px]'>
				{STATUS.map(status => (
					<TitlesItem
						title={status.title}
						value={status.value}
						isModal={false}
						key={status.title}
					/>
				))}
			</ul>
		</div>
	)
}

export default TitlesSidebar
