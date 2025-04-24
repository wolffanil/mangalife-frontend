'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { USER_URL } from '@/shared/config/url.config'
import { cn } from '@/shared/utils/tw-merge'

interface ProfileLinkProps {
	onCloseModal: () => void
	className?: string
}

function ProfileLink({ onCloseModal, className }: ProfileLinkProps) {
	const router = useRouter()

	return (
		<button
			onClick={() => {
				onCloseModal()
				router.push(USER_URL.profile())
			}}
			className={cn('flex w-full items-center gap-x-[10px]', className)}
		>
			<Image
				src='/images/header/profile.svg'
				alt='profile'
				width={26}
				height={26}
			/>
			<p className='block text-[16px] text-main-color xl:text-[24px]'>
				Профиль
			</p>
		</button>
	)
}

export default ProfileLink
