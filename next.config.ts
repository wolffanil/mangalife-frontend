import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
		NEXT_PUBILC_SERVER_URL: process.env.NEXT_PUBILC_SERVER_URL,
		NEXT_PUBLIC_MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL,
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '4000',
				pathname: '/uploads/**'
			},

			{
				protocol: 'https',
				hostname: 'avatars.yandex.net'
			},
			{
				protocol: 'https',
				hostname: '*.userapi.com'
			},
			{
				protocol: 'https',
				hostname: '6c3fbefd-678e-4218-bfa7-d57cc249631d.selstorage.ru'
			}
		]
	}
}

export default nextConfig
