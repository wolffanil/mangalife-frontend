'use client'

import { useRouter } from 'next/navigation'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { cn } from '@/shared/utils/tw-merge'

interface SignInButtonProps {
	isModal?: boolean
}

function SignInButton({ isModal = false }: SignInButtonProps) {
	const router = useRouter()

	return (
		<button
			onClick={() => {
				router.push(PUBLIC_URL.login())
			}}
			className={cn(
				'flex items-center justify-center rounded-[45px] text-center font-inter-bold text-[13px] font-bold xl:text-[20px]',
				{
					'h-[50px] w-[125px] bg-main-color text-yellow': isModal,
					'h-[62px] w-[153px] bg-yellow text-main-color': !isModal
				}
			)}
		>
			Войти
		</button>
	)
}

export default SignInButton
