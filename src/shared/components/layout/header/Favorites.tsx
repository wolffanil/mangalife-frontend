import Link from 'next/link'

import { USER_URL } from '@/shared/config/url.config'
import { cn } from '@/shared/utils/tw-merge'

interface FavoritesProps {
	isModal?: boolean
}

export default function Favorites({ isModal = false }: FavoritesProps) {
	return (
		<Link href={USER_URL.favorites()}>
			<button
				className={cn('flex items-center justify-center rounded-full', {
					'size-[68px] bg-yellow': !isModal,
					'size-[44px] bg-main-color': isModal
				})}
			>
				<svg
					width={isModal ? '24' : '46'}
					height={isModal ? '22' : '43'}
					viewBox='0 0 46 43'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M22.3001 6.72773C22.6724 7.10359 23.4169 7.10359 23.7892 6.72773C35.6613 -5.05954 52.4548 7.47942 39.0525 26.2721C34.7296 32.3274 30.8623 35.2926 24.9057 40.1787C23.4166 41.3062 22.5313 41.2409 21.1829 40.1787C15.2975 34.9832 11.7158 32.2545 7.03644 26.2721C-7.48297 5.97601 13.0874 -4.822 22.3001 6.72773Z'
						fill={isModal ? '#FAF8E6' : '#313131'}
						stroke={isModal ? '#313131' : '#FAF8E6'}
						strokeWidth='3'
					/>
				</svg>
			</button>
		</Link>
	)
}
