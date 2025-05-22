'use client'

import Link from 'next/link'

import { OnlyUser } from '@/shared/components/elements'
import { HEADER_LINKS } from '@/shared/libs/constants/header.constants'
import { cn } from '@/shared/utils/tw-merge'

import Favorites from '../Favorites'
import SignInButton from '../SignInButton'
import UserButton from '../UserButton'

import CloseButton from './CloseButton'
import Logout from './Logout'
import ProfileLink from './ProfileLink'

interface MobileModalProps {
	isOpen: boolean
	onCloseModal: () => void
}

function MobileModal({ isOpen, onCloseModal }: MobileModalProps) {
	return (
		<div
			className={cn(
				'absolute left-[-600px] top-[-20px] z-20 flex w-[268px] flex-col items-start rounded-[20px] bg-yellow p-[20px] duration-300 ease-in-out',
				{
					'left-0': isOpen
				}
			)}
		>
			<CloseButton onCloseModal={onCloseModal} />

			<ul className='mt-[40px] flex w-full flex-col items-start gap-y-[20px]'>
				{HEADER_LINKS.map((item, i) => (
					<li
						key={i}
						onClick={() => onCloseModal()}
						className='min-w-full'
					>
						<Link href={item.link} className='header__link block'>
							{item.title}
						</Link>
					</li>
				))}
				<OnlyUser>
					<ProfileLink onCloseModal={onCloseModal} />
					<Logout onCloseModal={onCloseModal} />
				</OnlyUser>
			</ul>

			<div className='mt-[35px] flex w-full items-center gap-y-[30px]'>
				<OnlyUser fallback={<SignInButton isModal />}>
					<UserButton
						onClickButton={onCloseModal}
						isModal
						className='mr-[30px]'
					/>
				</OnlyUser>
				<OnlyUser>
					<div onClick={() => onCloseModal()}>
						<Favorites isModal />
					</div>
				</OnlyUser>
			</div>
		</div>
	)
}

export default MobileModal
