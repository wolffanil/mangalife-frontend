import { WhiteWrapper } from '@/shared/components/elements'

import UsersList from './UsersList'

function Users() {
	return (
		<WhiteWrapper
			isSecond
			title='Заблокированные'
			className='pt-[59px] xl:pt-[131px]'
		>
			<UsersList />
		</WhiteWrapper>
	)
}

export default Users
