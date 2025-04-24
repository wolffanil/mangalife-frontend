import Link from 'next/link'

import { HEADER_LINKS } from '@/shared/libs/constants/header.constants'
import { cn } from '@/shared/utils/tw-merge'

interface NavigationProps {
	className?: string
}

function Navigation({ className }: NavigationProps) {
	return (
		<ul
			className={cn(
				'hidden w-[413px] items-center justify-between xl:flex',
				className
			)}
		>
			{HEADER_LINKS.map((link, i) => (
				<li key={i}>
					<Link href={link.link} className='header__link'>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Navigation
