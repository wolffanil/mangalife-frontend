import { type PropsWithChildren } from 'react'

import { cn } from '@/shared/utils/tw-merge'

interface MainContainerProps {
	className?: string
}

function MainContainer({
	className,
	children
}: PropsWithChildren<MainContainerProps>) {
	return <main className={cn('main__container', className)}>{children}</main>
}

export default MainContainer
