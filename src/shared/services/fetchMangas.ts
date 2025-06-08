import { API_URL, getMangaUrl } from '../config/api.config'
import type { IManga } from '../types/manga.interface'

export const fetchPopularMangas = async (): Promise<IManga[]> => {
	const res = await fetch(API_URL + getMangaUrl('/get-popular'), {
		method: 'GET'
	})

	const data = await res.json()

	return data?.mangas ?? []
}

export const fetchNewMangas = async (): Promise<IManga[]> => {
	const res = await fetch(API_URL + getMangaUrl('/get-new'), {
		method: 'GET'
	})

	const data = await res.json()

	return data?.mangas ?? []
}
