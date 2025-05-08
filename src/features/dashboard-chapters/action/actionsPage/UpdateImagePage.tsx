'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/shared/components/elements'
import {
	type UpdateImagePageType,
	updateImagePageSchema
} from '@/shared/schemas/page/update-image-page.schema'

import { useUpdateImagePage } from '../../hooks/useUpdateImagePage'

function UpdateImagePage() {
	const { handleSubmit, setError, setValue, control } =
		useForm<UpdateImagePageType>({
			resolver: zodResolver(updateImagePageSchema),
			defaultValues: {
				file: [],
				image: ''
			}
		})

	const { handleUpdateImage, isUpdatingImage } = useUpdateImagePage(
		setError,
		setValue
	)

	return (
		<form
			onSubmit={handleSubmit(handleUpdateImage)}
			className='flex flex-col items-start gap-y-[15px] xl:gap-y-[30px]'
		>
			<Controller
				control={control}
				disabled={isUpdatingImage}
				name='file'
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<div className='action-page__button'>
						<div className='action-page__circle'>
							<Image
								src='/images/page/update-image-page.svg'
								unoptimized
								alt='icon'
								width={21}
								height={21}
								className='size-[15px] object-cover xl:size-[21px]'
							/>
						</div>
						<input
							type='file'
							value={[]}
							onChange={onChange}
							className='input action-page__title'
							accept='image/jpg, image/webp, image/jpeg'
							placeholder='Заменить'
							disabled={isUpdatingImage}
						/>
					</div>
				)}
			/>
			<Button
				type='submit'
				className='h-[45px] w-[130px] rounded-[90px] xl:h-[66px] xl:w-[198px] xl:rounded-[50px]'
				disabled={isUpdatingImage}
			>
				Подвердить
			</Button>
		</form>
	)
}

export default UpdateImagePage
