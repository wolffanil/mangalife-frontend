import { cn } from '@/shared/utils/tw-merge'

import { STATUS } from '../../lib/constants/constants'
import TitlesItem from '../TitlesItem'

interface TitlesModalProps {
	handleCloseModal: () => void
	isOpen: boolean
	buttonElement: HTMLButtonElement | null
}

function TitlesModal({
	handleCloseModal,
	isOpen,
	buttonElement
}: TitlesModalProps) {
	const left = buttonElement?.getBoundingClientRect()?.left

	return (
		<div
			className={cn(
				`absolute mt-[15px] xl:hidden left-[${left} + "px"] flex w-[314px] flex-col items-start rounded-[20px] bg-main-color p-[20px] transition-all duration-300 ease-in-out`,
				{
					'left-[-500px]': !isOpen
				}
			)}
			onClick={handleCloseModal}
		>
			<h2 className='font-antelive-bold text-[20px] font-bold text-yellow'>
				Тайтлы
			</h2>
			<ul className='mt-[14px] flex w-full flex-col items-start gap-y-[6px]'>
				{STATUS.map(status => (
					<TitlesItem
						title={status.title}
						value={status.value}
						key={status.title}
						isModal
					/>
				))}
			</ul>
		</div>
	)
}

export default TitlesModal
