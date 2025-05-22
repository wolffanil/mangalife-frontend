import { AuthGuard, PremiumGuard } from '@/shared/components/elements'

import Header from './Header'
import PagesList from './PagesList'

function Read() {
	return (
		<AuthGuard>
			<PremiumGuard isCheck>
				<Header />
				<PagesList />
			</PremiumGuard>
		</AuthGuard>
	)
}

export default Read
