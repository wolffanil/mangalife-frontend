import { create } from 'zustand'

import type { ChapterStore } from './chapter.types'

export const chapterStore = create<ChapterStore>(set => ({
	chapter: null,
	setChapter: chapter => set({ chapter }),
	remove: () => set({ chapter: null })
}))
