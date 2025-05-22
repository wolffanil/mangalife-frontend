import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

import {
	SITE_DESCRIPTION,
	SITE_NAME
} from '@/shared/libs/constants/seo.constants'
import Provider from '@/shared/providers/Provider'
import '@/shared/styles/globals.css'

const openSansRegular = localFont({
	src: './fonts/OpenSans/OpenSans-Regular.ttf',
	variable: '--font-open_sans-regular'
})

const openSansBold = localFont({
	src: './fonts/OpenSans/OpenSans-Bold.ttf',
	variable: '--font-open_sans-bold'
})

const openSansSemiBold = localFont({
	src: './fonts/OpenSans/OpenSans-SemiBold.ttf',
	variable: '--font-open_sans-semibold'
})

const interRegular = localFont({
	src: './fonts/Inter/Inter_18pt-Regular.ttf',
	variable: '--font-inter-regular'
})

const interBold = localFont({
	src: './fonts/Inter/Inter_18pt-Bold.ttf',
	variable: '--font-inter-bold'
})

const anteliveBold = localFont({
	src: './fonts/Antelive/antelive_bold.ttf',
	variable: '--font-antelive-bold',
	display: 'swap'
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${openSansRegular.variable} ${openSansSemiBold.variable} ${openSansBold.variable} ${interRegular.variable} ${interBold.variable} ${anteliveBold.variable} min-h-[99vh] antialiased`}
			>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
