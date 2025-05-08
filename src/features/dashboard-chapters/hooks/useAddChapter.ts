import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { USER_URL } from '@/shared/config/url.config'
import { chapterStore } from '@/shared/store/chapter/chapter.store'

export function useAddChapter() {
	const chapter = chapterStore(state => state.chapter)
	const params = useParams<{ mangaId: string }>()

	const router = useRouter()

	const handleAddChapter = () => {
		router.push(
			USER_URL.createChapter(
				params.mangaId +
					`?tom=${chapter?.tom}&chapter=${chapter?.chapter}`
			)
		)
	}

	return useMemo(
		() => ({
			handleAddChapter
		}),
		[handleAddChapter]
	)
}
