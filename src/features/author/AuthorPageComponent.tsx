import { AuthGuard } from '@/shared/components/elements'

import Authors from './Authors'

function AuthorsPageComponent() {
	return (
		<AuthGuard onlyAdmin>
			<Authors />
		</AuthGuard>
	)
}

export default AuthorsPageComponent
