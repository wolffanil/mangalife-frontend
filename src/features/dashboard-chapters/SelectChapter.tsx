'use client'

import { type PropsWithChildren } from 'react'

import { chapterStore } from '@/shared/store/chapter/chapter.store'

function SelectChapter({ children }: PropsWithChildren<unknown>) {
	const chapter = chapterStore(state => state.chapter)

	if (!chapter?._id) return null

	return children
}

export default SelectChapter
