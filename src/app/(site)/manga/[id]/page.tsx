import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { cache } from 'react'

import Manga from '@/features/manga/Manga'

import { API_URL, getMangaUrl } from '@/shared/config/api.config'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'
import {
	fetchNewMangas,
	fetchPopularMangas
} from '@/shared/services/fetchMangas'
import type { IMangaById } from '@/shared/types/manga.interface'

const getManga = cache(async (id: string): Promise<IMangaById> => {
	const res = await fetch(API_URL + getMangaUrl(`/${id}`), {
		method: 'GET'
	})

	const data = await res.json()

	return data.manga
})

export async function generateStaticParams() {
	const [newMangas, popularMangas] = await Promise.all([
		fetchNewMangas(),
		fetchPopularMangas()
	])

	const mangas = [
		...newMangas?.map(manga => ({ id: manga._id })),
		...popularMangas?.map(manga => ({ id: manga._id }))
	]

	return mangas
}

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}): Promise<Metadata> {
	const mangaId = (await params).id
	const manga = await getManga(mangaId)

	if (!manga._id) {
		return {
			title: 'Манга не найдена'
		}
	}

	return {
		title: manga.titleRu,
		description: manga.description,
		alternates: {
			canonical: APP_URL + PUBLIC_URL.mangaById(mangaId)
		}
	}
}

export default async function Page({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const mangaId = (await params).id

	const manga = await getManga(mangaId)

	if (!manga._id) return redirect('/')

	return <Manga initialManga={manga} />
}
