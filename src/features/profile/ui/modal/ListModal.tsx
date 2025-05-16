import { cn } from '@/shared/utils/tw-merge'

import SortPlan from '../SortPlan'
import StatusPlan from '../StatusPlan'

interface ListModalProps {
	isOpen: boolean
	handleCloseModal: () => void
	buttonElement: HTMLButtonElement | null
}

function ListModal({
	isOpen,
	handleCloseModal,
	buttonElement
}: ListModalProps) {
	const left = buttonElement?.getBoundingClientRect()?.left
	return (
		<div
			className={cn(
				`absolute mt-[15px] xl:hidden left-[${left} + "px"] z-10 flex w-[314px] flex-col items-start gap-y-[25px] rounded-[20px] bg-main-color p-[20px] transition-all duration-300 ease-in-out`,
				{
					'left-[-500px]': !isOpen
				}
			)}
			onClick={handleCloseModal}
		>
			<StatusPlan isModal />
			<SortPlan isModal />
		</div>
	)
}

export default ListModal
