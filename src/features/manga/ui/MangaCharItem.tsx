interface MangaCharItemProps {
	title: string
	value: string | JSX.Element
	isJsx?: boolean
}

function MangaCharItem({ title, value, isJsx }: MangaCharItemProps) {
	return (
		<li className='manga__char-item'>
			<p className='manga__char-val'>{title}</p>
			{isJsx ? value : <p className='manga__char-val'>{value}</p>}
		</li>
	)
}

export default MangaCharItem
