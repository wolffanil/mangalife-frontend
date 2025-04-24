import type { Metadata } from 'next'

import AboutUs from '@/features/aboutUs/AboutUs'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'О нас',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.aboutUs()
	}
}

export default function AboutUsPage() {
	return <AboutUs />
}
