import CloseButton from '@/shared/components/layout/header/modals/CloseButton'
import { cn } from '@/shared/utils/tw-merge'

import FilterActions from './FilterActions'
import FilterGenres from './FilterGenres'
import FilterStatus from './FilterStatus'
import FilterType from './FilterType'

interface FiltersModalProps {
	isOpen: boolean
	buttonElement: HTMLButtonElement | null
	handleCloseModal: () => void
}

function FiltersModal({
	isOpen,
	buttonElement,
	handleCloseModal
}: FiltersModalProps) {
	const left = buttonElement?.getBoundingClientRect()?.left
	return (
		<div
			className={cn(
				`flex min-h-[565px] w-[314px] flex-col items-start rounded-[20px] bg-main-color p-[20px] left-[${left + 'px'}] absolute z-10 mt-[36px] transition-all duration-500 ease-in-out xl:hidden`,
				{
					'left-[-500px]': !isOpen
				}
			)}
		>
			<CloseButton onCloseModal={handleCloseModal} isWhite />
			<div className='mt-[20px] flex w-full items-start justify-between'>
				<FilterGenres isModal handleCloseModal={handleCloseModal} />
				<FilterType isModal handleCloseModal={handleCloseModal} />
			</div>
			<div className='mt-[25px]'>
				<FilterStatus isModal handleCloseModal={handleCloseModal} />
			</div>
			<div className='mt-[35px] w-full'>
				<FilterActions handleCloseModal={handleCloseModal} isModal />
			</div>
		</div>
	)
}

export default FiltersModal
