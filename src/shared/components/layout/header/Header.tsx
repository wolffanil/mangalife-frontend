import { OnlyUser } from '../../elements'

import Favorites from './Favorites'
import Hamburder from './Hamburder'
import Logo from './Logo'
import Navigation from './Navigation'
import SignInButton from './SignInButton'
import DesktopModal from './modals/DesktopModal'

function Header() {
	return (
		<header className='container mt-[57px] xl:mt-[56px]'>
			<nav className='flex min-w-full flex-row-reverse items-end justify-between xl:flex-row xl:border-b xl:border-[#D9D9D9] xl:pb-[26px]'>
				<Logo />
				<Navigation className='ml-[101px]' />
				<div className='ml-auto hidden items-end gap-x-[69px] xl:flex'>
					<OnlyUser>
						<Favorites />
					</OnlyUser>
					<OnlyUser fallback={<SignInButton />}>
						<DesktopModal />
					</OnlyUser>
				</div>

				<Hamburder />
			</nav>
		</header>
	)
}

export default Header
