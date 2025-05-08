import { create } from 'zustand'

import type { PageStore } from './page.types'

export const pageStore = create<PageStore>(set => ({
	page: null,
	setPage: page => set({ page }),
	remove: () => set({ page: null })
}))
