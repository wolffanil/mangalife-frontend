import dynamic from 'next/dynamic'
import { type PropsWithChildren } from 'react'

import Header from '@/shared/components/layout/header/Header'

const Footer = dynamic(() => import('@/shared/components/layout/footer/Footer'))

function SiteLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default SiteLayout
