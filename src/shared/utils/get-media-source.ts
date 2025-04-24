import { MEDIA_URL } from '../libs/constants/url.constants'

export function getMediaSource(path: string | undefined | null) {
	if (path && path?.startsWith('https')) {
		return path
	}
	return MEDIA_URL + path
}
