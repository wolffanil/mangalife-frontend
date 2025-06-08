import { PUBLIC_URL } from '@/shared/config/url.config'

export const navigationLinks = [
	{
		title: 'Главная',
		link: PUBLIC_URL.main()
	},
	{
		title: 'Каталог',
		link: PUBLIC_URL.catalog()
	},
	{
		title: 'О нас',
		link: PUBLIC_URL.aboutUs()
	},
	{
		title: 'Контакты',
		link: PUBLIC_URL.aboutUs()
	}
]

export const accountLinks = [
	{
		title: 'Войти в аккаунт',
		link: PUBLIC_URL.login()
	},
	{
		title: 'Регистрация',
		link: PUBLIC_URL.login()
	}
]

export const contacts = [
	{
		imageUrl: '/images/footer/vk.svg',
		link: 'https://vk',
		alt: 'vk'
	},
	{
		imageUrl: '/images/footer/telegram.svg',
		link: 'https://telegram',
		alt: 'telegram'
	}
]

export const userAggreements = [
	{
		title: 'Пользовательское соглашение',
		link: PUBLIC_URL.userAgreement()
	},
	{
		title: 'Политика конфиденциальности',
		link: PUBLIC_URL.confAgreement()
	},
	{
		title: 'Условия подписки',
		link: PUBLIC_URL.subscribeAgreement()
	}
]

export const email = 'mangalife@gmail.com'

export const phone = '+7 (961) 815 57-75'

export const cleanedPhone = phone.replace(/[^\d]/g, '')
