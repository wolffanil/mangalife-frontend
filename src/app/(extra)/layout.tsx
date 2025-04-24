import { PropsWithChildren } from 'react'

import { MainContainer } from '@/shared/components/elements'
import HeaderAgreement from '@/shared/components/elements/agreement/HeaderAgreement'

export default function ExtraLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<HeaderAgreement />
			<MainContainer>{children}</MainContainer>
		</>
	)
}
