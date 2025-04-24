import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { cn } from '@/shared/utils/tw-merge'

interface MiniRebbitProps {
	className?: string
	classNameImage?: string
}

function MiniRebbit({ className, classNameImage }: MiniRebbitProps) {
	return (
		<Link href={PUBLIC_URL.main()}>
			<div
				className={cn(
					'mx-auto flex size-[73px] items-center justify-center rounded-full bg-green xl:size-[122px]',
					className
				)}
			>
				<Image
					src='/images/mini-rebbit.png'
					alt='raddit'
					priority
					width={72}
					height={74}
					className={cn(
						'max-sm:h-[44px] max-sm:w-[44px]',
						classNameImage
					)}
				/>
			</div>
		</Link>
	)
}

export default MiniRebbit
