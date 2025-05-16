import SortPlan from './SortPlan'
import StatusPlan from './StatusPlan'

function PlanSidebar() {
	return (
		<div className='hidden min-w-[381px] max-w-[381px] flex-col items-start gap-y-[25px] rounded-[30px] border border-black px-[10px] py-[34px] xl:flex'>
			<StatusPlan isModal={false} />
			<SortPlan isModal={false} className='ml-[25px]' />
		</div>
	)
}

export default PlanSidebar
