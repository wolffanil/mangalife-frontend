'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import type { IPage } from '@/shared/types/page.interface'
import { getMediaSource } from '@/shared/utils/get-media-source'

import { useNextPage } from '../lib/hooks/useNextPage'

interface PageItemProps {
	isSkip: boolean
	page: IPage
}

function PageItem({ page, isSkip }: PageItemProps) {
	const { ref, inView } = useInView({
		skip: isSkip,
		triggerOnce: true
	})

	const { handleNextPage } = useNextPage()

	useEffect(() => {
		if (!inView) return

		handleNextPage?.()
	}, [inView])

	return (
		<li ref={ref} className={`page-number-${page.number}`}>
			<Image
				src={getMediaSource(page.image)}
				alt='image'
				width={894}
				height={1600}
				className='h-[1600px] w-[894px] object-cover max-sm:h-[540px] max-sm:w-[313px]'
			/>
		</li>
	)
}

export default PageItem
