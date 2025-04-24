import { PropsWithChildren } from 'react'

import AuthWrapper from '@/features/auth/AuthWrapper'

import { MainContainer } from '@/shared/components/elements'

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<MainContainer>
			<AuthWrapper>{children}</AuthWrapper>
		</MainContainer>
	)
}
