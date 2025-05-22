import Contants from './Contants'
import Rebbit from './Rebbit'

function AboutUs() {
	return (
		<section className='w-full pt-[81px] xl:pt-[167px]'>
			<div className='main__container'>
				<h1 className='font-antelive-bold text-[24px] font-bold text-yellow xl:text-[48px]'>
					О нас
				</h1>

				<div className='mt-[71px] flex w-full flex-col items-start gap-y-[45px] xl:mt-[98px] xl:flex-row xl:justify-between xl:gap-y-0'>
					<div className='flex flex-col items-start gap-y-[25px] xl:mt-[102px] xl:w-[811px] xl:gap-y-[48px]'>
						<p className='aboutUs__text'>
							<span className='font-open_sans-bold text-[15px] font-bold xl:text-[22px]'>
								MangaLife
							</span>
							— это мир, созданный для любителей манги, манхвы и
							восточной культуры. Мы объединяем всё лучшее из мира
							восточных комиксов и историй, предлагая доступ к
							классическим и новейшим сериям, эксклюзивным
							переводам и популярным новинкам.
						</p>

						<p className='aboutUs__text'>
							Наша цель — стать местом, где каждый найдёт свою
							любимую историю, будь то захватывающий экшен,
							романтика, мистика или комедия. Присоединяйтесь к
							сообществу MangaLife и откройте для себя бесконечное
							множество уникальных историй, всегда и везде.
						</p>
					</div>

					<Rebbit />
				</div>
			</div>
			<Contants />
		</section>
	)
}

export default AboutUs
