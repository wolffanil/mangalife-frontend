import type { Metadata } from 'next'

import SubscribeAgreement from '@/features/extra/subscribeAgreement/SubscribeAgreement'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Условия подписки',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.subscribeAgreement()
	}
}

export default function Page() {
	return <SubscribeAgreement />
}
