import Image from 'next/image'

import type { IUserBan } from '@/shared/types/user.interface'

interface UserInfoProps {
	user: IUserBan
}

function UserInfo({ user }: UserInfoProps) {
	const picture = user.picture
	const nickname = user.nickname

	return (
		<div className='flex items-center gap-x-[11px] xl:gap-x-[33px]'>
			<Image
				src={picture}
				alt='picture'
				width={108}
				height={108}
				className='size-[108px] rounded-full object-cover max-sm:size-[67px]'
			/>
			<p className='w-full break-words font-open_sans-regular text-[15px] text-main-color xl:text-[24px]'>
				{nickname}
			</p>
		</div>
	)
}

export default UserInfo
