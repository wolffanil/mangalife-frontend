import { AuthGuard } from '@/shared/components/elements'

import Genres from './Genres'

function GenresPageComponent() {
	return (
		<AuthGuard onlyAdmin>
			<Genres />
		</AuthGuard>
	)
}

export default GenresPageComponent
