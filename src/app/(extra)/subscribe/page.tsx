import type { Metadata } from 'next'

import Subscribe from '@/features/extra/subscribe/Subscribe'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Подписка',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.subscribe()
	}
}

export default function SubscribePage() {
	return <Subscribe />
}
