import type { Metadata } from 'next'
import Link from 'next/link'

import Home from '@/features/home/Home'

import {
	MainContainer,
	Title,
	WhiteAndBlackWrapper,
	WhiteWrapper
} from '@/shared/components/elements'
import { PUBLIC_URL, USER_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Главная',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.main()
	}
}

export default function MainPage() {
	return (
		// <>
		// 	<Title title='Панель Загрузки' />
		// 	<WhiteAndBlackWrapper title='Дабавление' desc='Управление' />
		// 	<WhiteWrapper isSecond>
		// 		<div className='flex flex-col'>
		// 			<Link href='/edit-profile' className='p-5 text-red-500'>
		// 				editProfile
		// 			</Link>
		// 			<Link href='/manage-authors' className='p-5 text-red-500'>
		// 				editAuthors
		// 			</Link>
		// 			<Link
		// 				href={PUBLIC_URL.subscribeAgreement()}
		// 				className='p-5 text-red-500'
		// 			>
		// 				subscribeAgreement
		// 			</Link>
		// 			<Link
		// 				href={PUBLIC_URL.userAgreement()}
		// 				className='p-5 text-red-500'
		// 			>
		// 				userAgreement
		// 			</Link>
		// 			<Link
		// 				href={PUBLIC_URL.confAgreement()}
		// 				className='p-5 text-red-500'
		// 			>
		// 				confAgreement
		// 			</Link>

		// 			<Link
		// 				href={USER_URL.manageGenres()}
		// 				className='p-5 text-red-500'
		// 			>
		// 				manage genres
		// 			</Link>

		// 			<Link
		// 				href={USER_URL.createManga()}
		// 				className='p-5 text-red-500'
		// 			>
		// 				create-manga
		// 			</Link>

		// 			<Link
		// 				href={USER_URL.createChapter(
		// 					'680f7c04e6b552cc751baaa4'
		// 				)}
		// 				className='p-5 text-red-500'
		// 			>
		// 				create-chapter
		// 			</Link>

		// 			<Link
		// 				href={USER_URL.dashboardChapters(
		// 					'680f7c04e6b552cc751baaa4'
		// 				)}
		// 				className='p-5 text-red-500'
		// 			>
		// 				dashboard-chapters
		// 			</Link>
		// 		</div>
		// 	</WhiteWrapper>
		// </>
		<>
			<Link href={USER_URL.allMangas()}>all mangas</Link>
			<Link href={USER_URL.reason()}>reason</Link>
			<Link href={USER_URL.users()}>users</Link>

			<Home />
		</>
	)
}
