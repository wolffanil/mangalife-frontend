'use client'

import Image from 'next/image'

import { useCurrent } from '@/shared/hooks/useCurrent'
import { getMediaSource } from '@/shared/utils/get-media-source'
import { cn } from '@/shared/utils/tw-merge'

interface UserButtonProps {
	isModal?: boolean
	onClickButton: () => void
	className?: string
}

function UserButton({
	onClickButton,
	className,
	isModal = false
}: UserButtonProps) {
	const { user, isLoadingProfile } = useCurrent()

	if (isLoadingProfile)
		return <p className='text-[14px] text-yellow'>Загрузка...</p>

	return (
		<button onClick={() => onClickButton()} className={className}>
			<Image
				src={getMediaSource(user?.picture)}
				width={100}
				height={100}
				alt='picture'
				priority
				className={cn(
					'size-[100px] max-w-[100px] rounded-full object-cover object-top',
					{
						'size-[50px]': isModal
					}
				)}
			/>
		</button>
	)
}

export default UserButton
