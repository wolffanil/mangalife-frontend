import type { Metadata } from 'next'

import Catalog from '@/features/catalog/Catalog'

import { API_URL, getMangaUrl } from '@/shared/config/api.config'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Каталог',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.catalog()
	}
}

export default async function CatalogPage() {
	return <Catalog />
}
