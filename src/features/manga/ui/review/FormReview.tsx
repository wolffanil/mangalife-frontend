'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import {
	CreateReviewType,
	createReviewSchema
} from '@/shared/schemas/review/create-review'

import { useCreateReview } from '../../lib/hooks/useCreateReview'

import RatingReview from './RatingReview'

function FormReview() {
	const [rating, setRating] = useState(0)

	const { control, handleSubmit, reset, setError } =
		useForm<CreateReviewType>({
			resolver: zodResolver(createReviewSchema),
			defaultValues: { text: '' }
		})

	const { handleCreate, isCreatingReview } = useCreateReview(setError, reset)

	return (
		<form
			className='mt-[40px] flex flex-col items-start xl:mt-[132px]'
			onSubmit={handleSubmit(data => handleCreate({ ...data }, rating))}
		>
			<h3 className='font-open_sans-bold text-[16px] font-bold text-main-color xl:text-[24px]'>
				Оставить комментарий
			</h3>
			<div className='mt-[19px] flex w-full flex-col items-start gap-y-[28px] xl:mt-[70px] xl:flex-row xl:items-end xl:gap-x-[70px] xl:gap-y-0'>
				<div className='flex w-full flex-col items-start gap-y-[25px] xl:w-[576px] xl:gap-y-[30px]'>
					<RatingReview
						isLoading={isCreatingReview}
						rating={rating}
						setRating={setRating}
					/>
					<Field<CreateReviewType>
						control={control}
						name='text'
						disabled={isCreatingReview}
						classNameInput='border-black w-full'
					/>
				</div>
				<Button
					type='submit'
					disabled={isCreatingReview || !rating}
					className='h-[51px] w-[122px] rounded-[70px] xl:h-[59px] xl:w-[193px] xl:rounded-[90px] xl:text-[20px]'
				>
					Отправить
				</Button>
			</div>
		</form>
	)
}

export default FormReview
