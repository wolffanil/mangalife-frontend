import type { MetadataRoute } from 'next'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: [
				PUBLIC_URL.main(),
				PUBLIC_URL.register(),
				PUBLIC_URL.login(),
				PUBLIC_URL.catalog(),
				PUBLIC_URL.subscribe(),
				PUBLIC_URL.userAgreement(),
				PUBLIC_URL.subscribeAgreement(),
				PUBLIC_URL.confAgreement(),
				PUBLIC_URL.politicts()
			],
			disallow: []
		},
		sitemap: APP_URL + '/sitemap.xml'
	}
}
