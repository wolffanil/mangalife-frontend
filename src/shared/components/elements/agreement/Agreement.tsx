import AgreementItem from './AgreementItem'

interface AgreementProps {
	agreement: {
		mainTitle: string
		rules: AgreementElement[]
	}
}

function Agreement({ agreement }: AgreementProps) {
	const mainTitle = agreement.mainTitle
	const rules = agreement.rules

	return (
		<section className='mt-[44px] flex flex-col items-start pb-[75px] xl:mt-[144px] xl:pb-[81px]'>
			<h1 className='text-start font-antelive-bold text-[24px] font-bold text-yellow xl:text-[48px]'>
				{mainTitle}
			</h1>
			<ul className='mt-[60px] flex flex-col items-start gap-y-[45px] xl:mt-[75px] xl:gap-y-[75px]'>
				{rules.map((r, i) => (
					<AgreementItem item={r} key={i} />
				))}
			</ul>
		</section>
	)
}

export default Agreement
