import { cn } from '@/shared/utils/tw-merge'

interface MangaCharItemProps {
	title: string
	value: string | JSX.Element
	isJsx?: boolean
	className?: string
}

function MangaCharItem({ title, value, isJsx, className }: MangaCharItemProps) {
	return (
		<li className={cn('manga__char-item', className)}>
			<p className='manga__char-val'>{title}</p>
			{isJsx ? value : <p className='manga__char-val'>{value}</p>}
		</li>
	)
}

export default MangaCharItem
