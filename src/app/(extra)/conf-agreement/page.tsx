import type { Metadata } from 'next'

import ConfAgreement from '@/features/extra/confAgreement/ConfAgreement'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Политика конфиденциальности',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.confAgreement()
	}
}

export default function ConfPage() {
	return <ConfAgreement />
}
