import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'

function Logo() {
	return (
		<Link
			href={PUBLIC_URL.main()}
			className='relative h-[61px] w-[86px] cursor-pointer xl:h-[85px] xl:w-[121px]'
		>
			<Image src='/images/logo.webp' alt='logo' priority fill />
		</Link>
	)
}

export default Logo
