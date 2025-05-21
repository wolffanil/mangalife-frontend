import { useQueryState } from 'nuqs'

export function usePrevionChapter() {
	const [cn, setCn] = useQueryState('cn')

	const cnNumber = Number(cn ?? 1)
	const isLast = cnNumber === 1

	const handlePrevionPage = () => {
		setCn(String(cnNumber - 1))
	}

	return { isLast, handlePrevionPage }
}
