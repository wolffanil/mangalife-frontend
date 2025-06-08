'use client'

import MangasWrapper from './MangasWrapper'
import { useGetPopular } from './hooks/useGetPopular'

function PopularMangas() {
	const { popularMangas, isLoadingPopular } = useGetPopular()

	return (
		<MangasWrapper
			title='Популярное'
			mangas={popularMangas ?? []}
			isLoading={isLoadingPopular}
		/>
	)
}

export default PopularMangas
