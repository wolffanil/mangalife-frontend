import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'

import { cn } from '@/shared/utils/tw-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

function Button({
	className,
	children,
	...rest
}: PropsWithChildren<ButtonProps>) {
	return (
		<button
			className={cn(
				'flex items-center justify-center rounded-[50px] bg-green font-open_sans-semibold text-[13px] font-semibold text-yellow disabled:cursor-not-allowed disabled:bg-[#4e8475] xl:text-[16px]',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
