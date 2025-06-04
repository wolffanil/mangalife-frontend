import type { Metadata } from 'next'

import Catalog from '@/features/catalog/Catalog'

import { API_URL, getMangaUrl } from '@/shared/config/api.config'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'
import type { IManga } from '@/shared/types/manga.interface'

export const metadata: Metadata = {
	title: 'Каталог',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.catalog()
	}
}

const getMangas = async (): Promise<IManga[]> => {
	const res = await fetch(API_URL + getMangaUrl(''), {
		method: 'GET',
		next: {
			revalidate: 60000
		}
	})

	const data = await res.json()

	return data.mangas
}

export default async function CatalogPage() {
	const initialMangas = await getMangas()

	return <Catalog initialMangas={initialMangas} />
}
