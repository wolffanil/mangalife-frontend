'use client'

import { Skeleton } from '@/shared/components/elements'

import { useGetUsers } from '../lib/hooks/useGetUsers'

import UserItem from './UserItem'

function UsersList() {
	const { users, isLoadingUsers } = useGetUsers()

	return (
		<ul className='mt-[64px] flex w-full flex-col items-start gap-y-[35px] xl:mt-[89px] xl:gap-y-[40px]'>
			{!isLoadingUsers ? (
				users?.length ? (
					users.map(user => <UserItem user={user} key={user._id} />)
				) : (
					<p className='mx-auto text-center text-[18px] font-semibold text-main-color xl:text-[24px]'>
						Заблокированных нету
					</p>
				)
			) : (
				Array.from({ length: 3 }).map((_, i) => (
					<Skeleton
						key={i}
						className='h-[202px] w-full rounded-[10px] xl:h-[168px]'
					/>
				))
			)}
		</ul>
	)
}

export default UsersList
