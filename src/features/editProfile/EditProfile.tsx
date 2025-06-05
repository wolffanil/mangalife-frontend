import dynamic from 'next/dynamic'

import { OnlyUser } from '@/shared/components/elements'

import EditProfileForm from './EditProfileForm'

const EditProfileAdmin = dynamic(() => import('./EditProfileAdmin'))
const EditProfilePublish = dynamic(() => import('./EditProfilePublish'))

function EditProfile() {
	return (
		<>
			<EditProfileForm />
			<OnlyUser role='admin'>
				<EditProfileAdmin />
			</OnlyUser>
			<OnlyUser role='publish'>
				<EditProfilePublish />
			</OnlyUser>
		</>
	)
}

export default EditProfile
