import type { IUserBan } from '@/shared/types/user.interface'

import UserAction from './UserAction'
import UserInfo from './UserInfo'
import UserReason from './UserReason'

interface UserItemProps {
	user: IUserBan
}

function UserItem({ user }: UserItemProps) {
	return (
		<li className='flex w-full flex-col items-start gap-y-[10px] rounded-[10px] border-[2px] border-green px-[20px] py-[22px] xl:flex-row xl:items-center xl:justify-between xl:gap-y-0 xl:px-[35px] xl:py-[30px]'>
			<div className='flex flex-col items-start gap-x-[154px] gap-y-[10px] xl:flex-row xl:items-center xl:gap-y-0'>
				<UserInfo user={user} />
				<UserReason user={user} />
			</div>
			<UserAction user={user} />
		</li>
	)
}

export default UserItem
