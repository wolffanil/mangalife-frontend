import type { Metadata } from 'next'
import Link from 'next/link'

import Home from '@/features/home/Home'

import { PUBLIC_URL, USER_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Главная',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.main()
	}
}

export default function MainPage() {
	return (
		<>
			<Link href={USER_URL.allMangas()}>all mangas</Link>
			<Link href={USER_URL.reason()}>reason</Link>
			<Link href={USER_URL.users()}>users</Link>

			<Home />
		</>
	)
}
