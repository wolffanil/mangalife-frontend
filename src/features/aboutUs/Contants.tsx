import Image from 'next/image'
import Link from 'next/link'

import { CONTACTS } from './contacts.constants'

function Contants() {
	return (
		<div className='mt-[75px] min-h-[378px] min-w-full rounded-tl-[55px] rounded-tr-[55px] bg-yellow pb-[137px] pt-[55px] xl:mt-[197px] xl:min-h-[985px] xl:rounded-tl-[200px] xl:rounded-tr-[200px] xl:pb-[400px] xl:pt-[213px]'>
			<div className='main__container'>
				<h2 className='font-antelive-bold text-[24px] font-bold text-main-color xl:text-[48px]'>
					Контакты
				</h2>

				<ul className='mt-[77px] flex w-full items-center justify-between xl:ml-[149px] xl:mt-[162px] xl:w-[1155px]'>
					{CONTACTS.map((c, i) => (
						<li key={i}>
							<Link
								href={c?.phone ? `tel:+${c.phone}` : c.link}
								target={c.phone ? '_self' : '_blank'}
							>
								<Image
									src={c.imageUrl}
									alt={c.alt}
									width={153}
									height={153}
									priority
									className='max-sm:h-[69px] max-sm:w-[69px]'
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Contants
