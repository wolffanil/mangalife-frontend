import type { Metadata } from 'next'

import LoginForm from '@/features/auth/forms/LoginForm'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Войти',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.login()
	}
}

export default function LoginPage() {
	return <LoginForm />
}
