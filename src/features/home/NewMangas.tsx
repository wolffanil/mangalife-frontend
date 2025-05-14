'use client'

import type { IManga } from '@/shared/types/manga.interface'

import MangasWrapper from './MangasWrapper'
import { useGetNew } from './hooks/useGetNew'

interface NewMangasProps {
	mangas: IManga[]
}

function NewMangas({ mangas }: NewMangasProps) {
	const { isLoadingNew, newMangas } = useGetNew(mangas)

	return (
		<MangasWrapper
			title='Новое'
			mangas={newMangas}
			classNameText='xl:translate-y-[28px] translate-x-[-31%] translate-y-[19px]'
		/>
	)
}

export default NewMangas
