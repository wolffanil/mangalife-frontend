import type { Metadata } from 'next'

import RegisterForm from '@/features/auth/forms/RegisterForm'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Регистрации',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.register()
	}
}

export default function Page() {
	return <RegisterForm />
}
