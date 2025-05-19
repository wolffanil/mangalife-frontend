'use client'

import { Button } from '@/shared/components/elements'
import type { IUserBan } from '@/shared/types/user.interface'

import { useSetUnBanUser } from '../lib/hooks/useSetUnBanUser'

interface UserActionProps {
	user: IUserBan
}

function UserAction({ user }: UserActionProps) {
	const { setUnBan, isLoadingUnBan } = useSetUnBanUser(user._id)

	return (
		<Button
			onClick={() => setUnBan()}
			disabled={isLoadingUnBan}
			className='mx-auto h-[41px] w-[157px] rounded-[50px] xl:mx-0 xl:h-[50px] xl:w-[185px]'
		>
			Разблокировать
		</Button>
	)
}

export default UserAction
