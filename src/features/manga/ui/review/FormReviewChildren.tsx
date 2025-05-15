'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import {
	CreateReviewType,
	createReviewSchema
} from '@/shared/schemas/review/create-review'
import type { IReview } from '@/shared/types/review.interface'

import { useCreateReview } from '../../lib/hooks/useCreateReview'

interface FormReviewChildrenProps {
	review: IReview
}

function FormReviewChildren({ review }: FormReviewChildrenProps) {
	const { control, handleSubmit, setError, reset } =
		useForm<CreateReviewType>({
			resolver: zodResolver(createReviewSchema),
			defaultValues: { text: '' }
		})

	const { handleCreate, isCreatingReview } = useCreateReview(
		setError,
		reset,
		review._id
	)

	return (
		<form
			onSubmit={handleSubmit(data => handleCreate(data))}
			className='ml-auto mt-[20px] flex w-[245px] flex-col items-start gap-y-[15px] xl:mt-[27px] xl:w-[477px] xl:flex-row xl:items-end xl:gap-x-[27px] xl:gap-y-0'
		>
			<Field<CreateReviewType>
				control={control}
				name='text'
				disabled={isCreatingReview}
				placeholder='Текст'
				classNameInput='border-black w-full xl:w-[311px]'
			/>
			<Button
				type='submit'
				className='h-[40px] w-[100px] rounded-[70px] xl:h-[59px] xl:w-[190px] xl:rounded-[90px] xl:text-[18px]'
				disabled={isCreatingReview}
			>
				Ответить
			</Button>
		</form>
	)
}

export default FormReviewChildren
