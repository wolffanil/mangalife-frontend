'use client'

import { type Dispatch, type SetStateAction } from 'react'

import { OnlyUser } from '@/shared/components/elements'

interface ReviewActionsProps {
	isShowAnswers: boolean
	isFormAnswer: boolean
	setShowAnswers: Dispatch<SetStateAction<boolean>>
	setFormAnswer: Dispatch<SetStateAction<boolean>>
}

function ReviewActions({
	setShowAnswers,
	setFormAnswer,
	isShowAnswers,
	isFormAnswer
}: ReviewActionsProps) {
	return (
		<div className='flex items-center gap-x-[10px]'>
			<OnlyUser>
				<button
					onClick={() => setFormAnswer(v => !v)}
					className='font-open_sans-regular text-[16px] text-main-color'
				>
					{!isFormAnswer ? 'Ответить' : 'Cкрыть'}
				</button>
			</OnlyUser>

			<button
				onClick={() => setShowAnswers(v => !v)}
				className='font-open_sans-regular text-[16px] text-main-color'
			>
				{!isShowAnswers ? 'Показать ответы' : 'Cкрыть ответы'}
			</button>
		</div>
	)
}

export default ReviewActions
