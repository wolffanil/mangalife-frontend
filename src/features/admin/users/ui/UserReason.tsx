import type { IUserBan } from '@/shared/types/user.interface'

interface UserReasonProps {
	user: IUserBan
}

function UserReason({ user }: UserReasonProps) {
	const text = user?.reason?.text || 'Неизвестно'

	return (
		<div className='flex items-center gap-x-[5px] xl:gap-x-[26px]'>
			<p className='text-main-colo font-open_sans-regular text-[13px] xl:text-[24px]'>
				Причина:
			</p>
			<p className='font-open_sans-regular text-[12px] text-main-color xl:text-[20px]'>
				{text}
			</p>
		</div>
	)
}

export default UserReason
