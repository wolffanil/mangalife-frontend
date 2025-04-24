import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'

function Rebbit() {
	return (
		<div className='mx-auto xl:mx-0'>
			<Link
				href={PUBLIC_URL.main()}
				className='flex size-[265px] items-center justify-center rounded-full bg-green xl:size-[464px]'
			>
				<Image
					src='/images/big-rebbit.webp'
					alt='rebbit'
					width={283}
					height={303}
					priority
					className='max-sm:h-[173px] max-sm:w-[172px]'
				/>
			</Link>
		</div>
	)
}

export default Rebbit
