'use client'

import { Button } from '@/shared/components/elements'
import type { IReason } from '@/shared/types/reason.inerface'

import { useChangeStatus } from '../lib/hooks/useChangeStatus'
import { useSetBanUser } from '../lib/hooks/useSetBanUser'

interface ReasonActionsProps {
	reason: IReason
}

function ReasonActions({ reason }: ReasonActionsProps) {
	const { handleChangeStatus, isLoadingChangeStatus } = useChangeStatus(
		reason.review._id
	)

	const { setBanUser, isLoadingSetBan } = useSetBanUser(
		reason._id,
		reason.user._id
	)

	const isLoading = isLoadingChangeStatus || isLoadingSetBan

	return (
		<div className='w-full rounded-bl-[30px] rounded-br-[30px] border-[2px] border-y border-b-[2px] border-green bg-yellow xl:w-[255px] xl:rounded-bl-none xl:rounded-tr-[30px] xl:border-y-[2px] xl:border-l'>
			<div className='hidden h-[109px] border-b-[2px] border-green xl:block'></div>
			<div className='flex h-[223px] w-full items-center justify-center xl:h-[236px]'>
				<div className='flex w-[157px] flex-col items-center gap-y-[13px] xl:w-[185px] xl:gap-y-[15px]'>
					<Button
						disabled={isLoading}
						onClick={() => handleChangeStatus('Отклонённый')}
						className='h-[43px] w-full xl:h-[50px]'
					>
						Отклонить
					</Button>
					<Button
						onClick={() => handleChangeStatus('Предупреждения')}
						disabled={isLoading}
						className='h-[43px] w-full xl:h-[50px]'
					>
						Предупреждение
					</Button>
					<Button
						onClick={() => setBanUser()}
						disabled={isLoading}
						className='h-[43px] w-full bg-[#F46E6E] text-white disabled:bg-red-400 xl:h-[50px]'
					>
						Заблокировать
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ReasonActions
