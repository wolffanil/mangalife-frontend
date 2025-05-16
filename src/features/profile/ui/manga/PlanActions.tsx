'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/components/elements'
import { USER_URL } from '@/shared/config/url.config'
import { cn } from '@/shared/utils/tw-merge'

interface PlanActionsProps {
	mangaId: string
	currentPages: number
	className?: string
}

function PlanActions({ currentPages, className, mangaId }: PlanActionsProps) {
	const router = useRouter()

	const isStart = currentPages ? currentPages === 1 : 1

	return (
		<Button
			className={cn(
				'mt-[27px] h-[48px] w-[128px] rounded-[90px] xl:mt-[49px] xl:h-[49px] xl:w-[154px]',
				className
			)}
			onClick={() => router.push(USER_URL.readManga(mangaId))}
		>
			{isStart ? 'Начать' : 'Продолжить'}
		</Button>
	)
}

export default PlanActions
