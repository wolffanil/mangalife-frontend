import type { Metadata } from 'next'
import Link from 'next/link'

import {
	MainContainer,
	Title,
	WhiteAndBlackWrapper,
	WhiteWrapper
} from '@/shared/components/elements'
import { PUBLIC_URL, USER_URL } from '@/shared/config/url.config'

export const metadata: Metadata = {
	title: 'Главная'
}

export default function MainPage() {
	return (
		<>
			<Title title='Панель Загрузки' />
			<WhiteAndBlackWrapper title='Дабавление' desc='Управление' />
			<WhiteWrapper isSecond>
				<div className='flex flex-col'>
					<Link href='/edit-profile' className='p-5 text-red-500'>
						editProfile
					</Link>
					<Link href='/manage-authors' className='p-5 text-red-500'>
						editAuthors
					</Link>
					<Link
						href={PUBLIC_URL.subscribeAgreement()}
						className='p-5 text-red-500'
					>
						subscribeAgreement
					</Link>
					<Link
						href={PUBLIC_URL.userAgreement()}
						className='p-5 text-red-500'
					>
						userAgreement
					</Link>
					<Link
						href={PUBLIC_URL.confAgreement()}
						className='p-5 text-red-500'
					>
						confAgreement
					</Link>

					<Link
						href={USER_URL.manageGenres()}
						className='p-5 text-red-500'
					>
						manage genres
					</Link>
				</div>
			</WhiteWrapper>
		</>
	)
}
