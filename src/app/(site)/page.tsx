import type { Metadata } from 'next'

import Home from '@/features/home/Home'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	alternates: {
		canonical: APP_URL + PUBLIC_URL.main()
	}
}

export default function MainPage() {
	return <Home />
}
