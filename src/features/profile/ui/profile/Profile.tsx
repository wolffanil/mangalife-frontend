'use client'

import Image from 'next/image'
import Link from 'next/link'

import { USER_URL } from '@/shared/config/url.config'
import { useCurrent } from '@/shared/hooks/useCurrent'
import { getMediaSource } from '@/shared/utils/get-media-source'

function Profile() {
	const { user } = useCurrent()
	const profileUrl = getMediaSource(user?.picture)
	const nickname = user?.nickname ?? 'Пользователь'

	return (
		<div className='mx-auto flex flex-col items-center gap-y-[32px] xl:gap-y-[49px]'>
			<div className='flex items-center gap-x-[12px] xl:gap-x-[42px]'>
				<p className='font-antelive-bold text-[20px] font-bold text-main-color xl:text-[32px]'>
					{nickname}
				</p>
				<Link href={USER_URL.editProfile()}>
					<div className='flex size-[24px] items-center justify-center rounded-full bg-main-color xl:size-[27px]'>
						<Image
							src='/images/profile-edit.svg'
							alt='edit'
							width={17}
							height={17}
							className='h-[17px] w-[17px] object-cover max-sm:h-[16px] max-sm:w-[16px]'
						/>
					</div>
				</Link>
			</div>
			<Image
				src={profileUrl}
				priority
				alt='picture'
				width={233}
				height={233}
				className='h-[233px] max-h-[233px] w-[233px] rounded-full object-cover max-sm:h-[123px] max-sm:max-h-[123px] max-sm:w-[123px] max-sm:max-w-[123px]'
			/>
		</div>
	)
}

export default Profile
