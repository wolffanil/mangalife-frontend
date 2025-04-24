import BackButton from '../BackButton'
import MiniRebbit from '../rebbit/MiniRebbit'

function HeaderAgreement() {
	return (
		<header
			className='main__container flex w-full flex-col justify-center gap-x-0 gap-y-[37px] pt-[75px] xl:flex-row-reverse xl:items-center xl:gap-x-[465px] xl:gap-y-0 xl:pt-[81px]'
			style={{
				justifyContent: 'start'
			}}
		>
			<MiniRebbit
				className='mx-auto size-[89px] xl:mx-0'
				classNameImage='max-sm:w-[53px] max-sm:h-[54px]'
			/>
			<div>
				<BackButton className='ml-[15px] mr-auto xl:ml-[26px] xl:mr-0' />
			</div>
		</header>
	)
}

export default HeaderAgreement
