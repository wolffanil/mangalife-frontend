import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'
import {
	fetchNewMangas,
	fetchPopularMangas
} from '@/shared/services/fetchMangas'

export default async function sitemap() {
	const [newMangas, popularMangas] = await Promise.all([
		fetchNewMangas(),
		fetchPopularMangas()
	])

	const mangas = [...newMangas, ...popularMangas]

	const mangasUrls = mangas?.length
		? mangas.map(manga => ({
				url: APP_URL + PUBLIC_URL.mangaById(manga._id),
				lastModified: manga.updatedAt,
				priority: 0.5
			}))
		: []

	return [
		{
			url: APP_URL + PUBLIC_URL.main(),
			lastModified: new Date(),
			priority: 1
		},
		{
			url: APP_URL + PUBLIC_URL.catalog(),
			lastModified: new Date(),
			priority: 0.9
		},
		{
			url: APP_URL + PUBLIC_URL.confAgreement(),
			lastModified: new Date(),
			priority: 0.6
		},
		{
			url: APP_URL + PUBLIC_URL.politicts(),
			lastModified: new Date(),
			priority: 0.6
		},
		{
			url: APP_URL + PUBLIC_URL.subscribeAgreement(),
			lastModified: new Date(),
			priority: 0.6
		},
		{
			url: APP_URL + PUBLIC_URL.subscribe(),
			lastModified: new Date(),
			priority: 0.8
		},
		{
			url: APP_URL + PUBLIC_URL.aboutUs(),
			lastModified: new Date(),
			priority: 0.8
		},
		{
			url: APP_URL + PUBLIC_URL.register(),
			lastModified: new Date(),
			priority: 0.7
		},
		{
			url: APP_URL + PUBLIC_URL.login(),
			lastModified: new Date(),
			priority: 0.7
		},
		...mangasUrls
	]
}
