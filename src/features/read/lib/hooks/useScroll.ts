import { useEffect } from 'react'

import { useGetChapters } from '@/features/dashboard-chapters/hooks/useGetChapters'

import { useGetChapterByUser } from './useGetChapterByUser'
import { useGetCurrentPages } from './useGetCurrentPages'

export function useScroll() {
	const { chapter, isLoadingChapter } = useGetChapterByUser()
	const { isLoadingChapter: isLoadingPages } = useGetCurrentPages()
	const { isLoadingChapters } = useGetChapters()

	useEffect(() => {
		if (
			isLoadingChapter ||
			!chapter?.plan?._id ||
			isLoadingChapters ||
			isLoadingPages
		)
			return

		const timeout = setTimeout(() => {
			const element = document.querySelector(
				`.page-number-${chapter?.plan?.currentPage}`
			)

			if (element) {
				element.scrollIntoView()
			}
		}, 300)

		return () => clearTimeout(timeout)
	}, [isLoadingChapter, isLoadingPages, isLoadingChapters])
}
