import dynamic from 'next/dynamic'

import { AuthGuard, OnlyUser } from '@/shared/components/elements'

import EditProfileForm from './EditProfileForm'

const EditProfileAdmin = dynamic(() => import('./EditProfileAdmin'))
const EditProfilePublish = dynamic(() => import('./EditProfilePublish'))

function EditProfile() {
	return (
		<AuthGuard>
			<EditProfileForm />
			<OnlyUser role='admin'>
				<EditProfileAdmin />
			</OnlyUser>
			<OnlyUser role='publish'>
				<EditProfilePublish />
			</OnlyUser>
		</AuthGuard>
	)
}

export default EditProfile
