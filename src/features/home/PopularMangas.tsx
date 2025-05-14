'use client'

import { IManga } from '@/shared/types/manga.interface'

import MangasWrapper from './MangasWrapper'
import { useGetPopular } from './hooks/useGetPopular'

interface PopularMangasProps {
	mangas: IManga[]
}

function PopularMangas({ mangas }: PopularMangasProps) {
	const { popularMangas, isLoadingPopular } = useGetPopular(mangas)

	return <MangasWrapper title='Популярное' mangas={popularMangas} />
}

export default PopularMangas
