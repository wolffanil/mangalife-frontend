interface AgreementItemProps {
	item: AgreementElement
}

function AgreementItem({ item }: AgreementItemProps) {
	return (
		<li className='flex flex-col items-start'>
			<h2 className='agreement__title'>{item.title}</h2>

			<ul className='mt-[45px] flex flex-col items-start gap-y-[30px] xl:mt-[65px] xl:gap-y-[50px]'>
				{item.subTitles.map((s, i) => (
					<li key={i} className='agreement__sub-title'>
						{s}
					</li>
				))}
			</ul>
		</li>
	)
}

export default AgreementItem
