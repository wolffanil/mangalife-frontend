import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'

import WelcomeBg from './WelcomeBg'

function Welcome() {
	return (
		<section className='relative mt-[51px] w-full'>
			<div className='w-full pt-[49px] xl:mt-[85px] xl:pt-[78px]'>
				<div className='relative max-w-[325px] rounded-br-full rounded-tr-full bg-yellow px-[31px] pb-[24px] pt-[45px] xl:max-w-[1552px] xl:px-[250px] xl:pb-[94px] xl:pt-[94px]'>
					<h1 className='relative z-[3] font-antelive-bold text-[11px] font-bold leading-[15px] text-main-color xl:text-[40px] xl:leading-[65px]'>
						Твой универсальный портал в <br /> мир манги и манхвы!
					</h1>
					<Link
						href={PUBLIC_URL.catalog()}
						className='pointer-events-auto relative z-10'
					>
						<div className='relative mt-[28px] flex w-[96px] cursor-pointer items-center gap-x-[10px] xl:mt-[86px] xl:gap-x-[20px]'>
							<p className='font-open_sans-bold text-[11px] font-bold text-main-color xl:text-[30px]'>
								Читать
							</p>
							<Image
								src='/images/line.svg'
								unoptimized
								priority
								alt='line'
								width={97}
								height={31}
								className='max-h-[31px] max-w-[97px] object-cover max-sm:max-h-[15px] max-sm:max-w-[41px]'
							/>
							<div className='absolute bottom-[-8px] right-[-21px] z-[-1] h-[37px] w-[38px] rounded-full bg-green xl:bottom-[-23px] xl:right-[-180px] xl:size-[87px]' />
						</div>
					</Link>

					<div className='absolute right-[12px] top-[-31px] z-[2] flex size-[136px] items-center justify-center rounded-full bg-green xl:right-[119px] xl:top-[-106px] xl:size-[464px]'>
						<Image
							src='/images/big-rebbit.webp'
							alt='rebbit'
							width={301}
							height={303}
							priority
							className='max-h-[303px] max-w-[301px] max-sm:max-h-[89px] max-sm:max-w-[84px]'
						/>
					</div>
				</div>
			</div>
			<WelcomeBg />
		</section>
	)
}

export default Welcome
