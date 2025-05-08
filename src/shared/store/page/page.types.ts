import type { IPage } from '@/shared/types/page.interface'

export interface PageStore {
	setPage: (page: IPage) => void
	page: IPage | null
	remove: () => void
}
