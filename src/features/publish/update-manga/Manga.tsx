'use client'

import { redirect } from 'next/navigation'

import MangaForm from '@/features/manage-manga/MangaForm'

import { useGetMangaById } from '@/shared/hooks/manga/useGetMangaById'

import ButtonDashboard from './ButtonDashboard'

function Manga() {
	const { manga, isLoadingManga } = useGetMangaById()

	if (isLoadingManga)
		return (
			<div className='text-center text-[15px] text-main-color'>
				Загрузка...
			</div>
		)

	if (!manga?._id) return redirect('/')

	return (
		<>
			<MangaForm type='edit' manga={manga} />
			<ButtonDashboard />
		</>
	)
}

export default Manga
