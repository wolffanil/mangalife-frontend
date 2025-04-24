import type { Metadata } from 'next'

import UserAgreement from '@/features/extra/userAgreement/UserAgreement'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Пользовательское соглашение',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.userAgreement()
	}
}

export default function Page() {
	return <UserAgreement />
}
