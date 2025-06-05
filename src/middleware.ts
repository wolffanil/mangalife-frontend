import { type MiddlewareConfig, NextRequest, NextResponse } from 'next/server'

import { PUBLIC_URL } from './shared/config/url.config'
import { EnumTokens } from './shared/types/auth.interface'

export default function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	console.log(EnumTokens.REFRESH_TOKEN, 'enum')
	console.log(refreshToken, 'refreshToken')

	const isAuthPage =
		url.includes(PUBLIC_URL.login()) || url.includes(PUBLIC_URL.register())

	if (isAuthPage) {
		if (refreshToken) {
			return NextResponse.redirect(new URL('/', request.url))
		}

		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL(PUBLIC_URL.login(), url))
	}

	return NextResponse.next()
}

export const config: MiddlewareConfig = {
	matcher: [
		'/profile',
		'/edit-profile',
		'/manage-authors',
		'/manage-genres',
		'/admin/:path*',
		'/publish/:path*',
		'/read/:path*',
		'/login',
		'/register'
	]
}
