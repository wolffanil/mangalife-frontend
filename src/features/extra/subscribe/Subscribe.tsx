import SubscribeButton from './SubscribeButton'
import SubscribeList from './SubscribeList'

function Subscribe() {
	return (
		<section className='pb-[80px] pt-[60px] xl:pb-[129px] xl:pt-[109px]'>
			<h1 className='text-start font-antelive-bold text-[20px] font-bold text-yellow xl:text-[32px]'>
				С подпиской MangaLifePRO вы получаете:
			</h1>
			<p className='mt-[30px] text-start font-open_sans-bold text-[15px] font-bold leading-[30px] text-yellow xl:mt-[80px] xl:text-[24px] xl:leading-10'>
				Неограниченный доступ ко всем мангам, манхвам и комиксам на
				сайте. Читайте любимые серии без ограничений!
			</p>
			<SubscribeList />
			<p className='mt-[40px] font-open_sans-bold text-[15px] font-bold leading-[30px] text-yellow xl:mt-[41px] xl:text-[24px]'>
				Откройте полный доступ к MangaLife+ и наслаждайтесь лучшими
				историями без преград!
			</p>
			<SubscribeButton />
		</section>
	)
}

export default Subscribe
