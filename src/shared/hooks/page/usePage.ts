import { pageStore } from '@/shared/store/page/page.store'

export function usePage() {
	const page = pageStore(state => state.page)

	return { page }
}

export function useActionPage() {
	const remove = pageStore(state => state.remove)
	const setPage = pageStore(state => state.setPage)

	return { remove, setPage }
}
