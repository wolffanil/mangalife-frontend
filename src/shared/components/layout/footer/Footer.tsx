import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'
import {
	accountLinks,
	cleanedPhone,
	contacts,
	email,
	navigationLinks,
	phone,
	userAggreements
} from '@/shared/libs/constants/footer.constants'

function Footer() {
	return (
		<footer className='container relative z-[2] mt-[-57px] flex min-w-full flex-col items-start rounded-tl-[55px] rounded-tr-[55px] bg-main-color pb-[75px] pt-[50px] xl:mt-[-196px] xl:flex-row xl:justify-between xl:rounded-tl-[200px] xl:rounded-tr-[200px] xl:pb-[79px] xl:pt-[87px]'>
			<div className='max-sm:mx-auto xl:w-[253px]'>
				<Link href={PUBLIC_URL.main()} className='mx-auto block'>
					<Image
						src='/images/footer/logo-footer.png'
						alt='logo'
						width={253}
						height={178}
						priority
						className='cursor-pointer object-contain max-sm:h-[79px] max-sm:w-[123px]'
					/>
				</Link>

				<ul className='mt-[20px] hidden w-full flex-col items-start gap-y-[20px] xl:flex'>
					{userAggreements.map((item, i) => (
						<li key={i} className='footer__second-text'>
							<Link href={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>

				<p className='footer__second-text mt-[35px] hidden xl:inline-block'>
					2025 &copy; Все права защищены
				</p>
			</div>

			<div className='mt-[67px] grid w-full grid-cols-2 items-start gap-x-[80px] border-yellow xl:mt-[70px] xl:w-[633px] xl:border-r'>
				<div className='flex flex-col items-start border-yellow xl:w-[220px] xl:border-r'>
					<p className='footer__main-text'>Навигация</p>

					<ul className='mt-[35px] flex flex-col items-start gap-y-[15px] xl:gap-y-[20px]'>
						{navigationLinks.map((item, i) => (
							<li key={i} className='footer__second-text'>
								<Link href={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className='flex flex-col items-start xl:w-[290px]'>
					<p className='footer__main-text'>Аккаунт</p>

					<ul className='mt-[35px] flex flex-col items-start gap-y-[15px] xl:gap-y-[20px]'>
						{accountLinks.map((item, i) => (
							<li key={i} className='footer__second-text'>
								<Link href={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='mt-[40px] flex w-full flex-col items-start xl:mt-[70px] xl:w-[165px]'>
				<h3 className='footer__main-text'>Контакты</h3>

				<ul className='mt-[35px] flex items-start gap-x-[23px] xl:mt-[41px]'>
					{contacts.map((item, i) => (
						<li key={i} className='hover:cursor-pointer'>
							<Link href={item.link} target='_blank'>
								<Image
									src={item.imageUrl}
									alt={item.alt}
									unoptimized
									width={44}
									height={44}
								/>
							</Link>
						</li>
					))}
				</ul>

				<p className='footer__second-text mt-[20px]'>{email}</p>

				<a
					href={`tel:+${cleanedPhone}`}
					className='footer__second-text mt-[19px]'
				>
					{phone}
				</a>
			</div>

			<span className='my-[45px] h-[1px] w-full bg-yellow xl:hidden' />

			<ul className='flex w-full flex-col items-start gap-y-[22px] xl:hidden'>
				{userAggreements.map((item, i) => (
					<li key={i} className='footer__second-text'>
						<Link href={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>

			<p className='footer__second-text mt-[55px] xl:hidden'>
				2025 &copy; Все права защищены
			</p>
		</footer>
	)
}

export default Footer
