import type { IChapter } from '@/shared/types/chapter.interface'

export interface ChapterStore {
	setChapter: (chapter: IChapter) => void
	chapter: IChapter | null
	remove: () => void
}
