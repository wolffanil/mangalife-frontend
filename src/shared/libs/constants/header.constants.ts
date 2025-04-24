import { PUBLIC_URL } from '@/shared/config/url.config'

export const HEADER_LINKS = [
	{
		title: 'Каталог',
		link: PUBLIC_URL.catalog()
	},
	{
		title: 'О нас',
		link: PUBLIC_URL.aboutUs()
	},
	{
		title: 'Подписка',
		link: PUBLIC_URL.subscribe()
	}
]
