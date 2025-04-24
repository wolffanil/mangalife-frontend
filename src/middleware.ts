import {
	type MiddlewareConfig,
	type NextRequest,
	NextResponse
} from 'next/server'

import { EnumTokens } from './shared/types/auth.interface'

export default function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/', url))
	}

	return NextResponse.next()
}

export const config: MiddlewareConfig = {
	matcher: ['/profile', '/edit-profile', '/manage-authors', '/manage-genres']
}
