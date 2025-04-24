import type { Metadata } from 'next'

import EditProfile from '@/features/editProfile/EditProfile'

import { Title, WhiteWrapper } from '@/shared/components/elements'
import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Настройка профиль',
	...NO_INDEX_PAGE
}

export default function EditProfilePage() {
	return (
		<>
			<Title title='Настройка профиля' />
			<WhiteWrapper withBack>
				<EditProfile />
			</WhiteWrapper>
		</>
	)
}
