import { AuthGuard } from '@/shared/components/elements'

import EditProfileForm from './EditProfileForm'

function EditProfile() {
	return (
		<AuthGuard>
			<EditProfileForm />
		</AuthGuard>
	)
}

export default EditProfile
