import Image from 'next/image'

import { useAuth } from '@/shared/hooks/useAuth'
import { cn } from '@/shared/utils/tw-merge'

interface LogoutProps {
	onCloseModal?: () => void
	className?: string
}

function Logout({ onCloseModal, className }: LogoutProps) {
	const { logout } = useAuth()

	return (
		<button
			onClick={() => {
				logout?.()
				onCloseModal?.()
			}}
			className={cn('flex w-full items-center gap-x-[10px]', className)}
		>
			<Image
				src='/images/header/logout.svg'
				alt='profile'
				width={25}
				height={25}
			/>
			<p className='block text-[16px] text-main-color xl:text-[24px]'>
				Выход
			</p>
		</button>
	)
}

export default Logout
