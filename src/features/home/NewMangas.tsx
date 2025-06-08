'use client'

import MangasWrapper from './MangasWrapper'
import { useGetNew } from './hooks/useGetNew'

function NewMangas() {
	const { isLoadingNew, newMangas } = useGetNew()

	return (
		<MangasWrapper
			title='Новое'
			isLoading={isLoadingNew}
			mangas={newMangas ?? []}
			classNameText='xl:translate-y-[28px] translate-x-[-31%] translate-y-[19px]'
		/>
	)
}

export default NewMangas
