'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import { type TGenre, genreSchema } from '@/shared/schemas/genre/genre.schema'

import { useCreateGenre } from './hooks/useCreateGenre'

function GenreForm() {
	const { control, reset, setError, handleSubmit } = useForm<TGenre>({
		resolver: zodResolver(genreSchema),
		mode: 'onSubmit'
	})

	const { createGenre, isCreatingGenre } = useCreateGenre(setError, reset)

	const handleCreate = async (data: TGenre) => {
		await createGenre(data)
	}

	return (
		<form
			className='mx-auto mt-[25px] flex w-[531px] flex-col items-start'
			onSubmit={handleSubmit(handleCreate)}
		>
			<h3 className='text-start text-[24px] text-main-color'>
				Создать жанр
			</h3>
			<Field<TGenre>
				control={control}
				name='title'
				placeholder='название жанра'
				disabled={isCreatingGenre}
				classNameContainer='mt-[15px]'
			/>

			<Button
				className='mx-auto mt-[15px] h-[45px] w-[135px] rounded-[50px] xl:text-[16px]'
				disabled={isCreatingGenre}
				type='submit'
			>
				Добавить
			</Button>
		</form>
	)
}

export default GenreForm
