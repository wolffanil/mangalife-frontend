'use client'

import Image from 'next/image'

import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

function WelcomeBg() {
	const isMobile = useMediaQuery('(max-width: 500px)')

	return (
		<div className='absolute right-0 top-0 z-[-4] xl:right-[174px]'>
			<Image
				src={`/images/home/${isMobile ? 'mobile-bg.svg' : 'dekstop-bg.svg'}`}
				alt='bg'
				unoptimized
				priority
				width={isMobile ? 176 : 435}
				height={isMobile ? 239 : 666}
				className='max-h-[666px] max-w-[435px] max-sm:max-h-[435px] max-sm:max-w-[176px]'
			/>
		</div>
	)
}

export default WelcomeBg
