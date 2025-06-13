'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import {
	type TAuthor,
	authorSchema
} from '@/shared/schemas/author/author.schema'

import { useCreateAuthor } from './hooks/useCreateAuthor'

function AuthorForm() {
	const { control, reset, setError, handleSubmit } = useForm<TAuthor>({
		resolver: zodResolver(authorSchema),
		mode: 'onSubmit'
	})

	const { createAuthor, isCreatingAuthor } = useCreateAuthor(setError, reset)

	const handleCreate = async (data: TAuthor) => {
		await createAuthor(data)
	}

	return (
		<form
			className='mx-auto mt-[25px] flex w-[531px] flex-col items-start'
			onSubmit={handleSubmit(handleCreate)}
		>
			<h3 className='text-start text-[24px] text-main-color'>
				Создать автора
			</h3>
			<Field<TAuthor>
				control={control}
				name='name'
				placeholder='имя автора'
				disabled={isCreatingAuthor}
				classNameContainer='mt-[15px]'
			/>

			<Button
				className='mx-auto mt-[15px] h-[45px] w-[135px] rounded-[50px] xl:text-[16px]'
				disabled={isCreatingAuthor}
				type='submit'
			>
				Добавить
			</Button>
		</form>
	)
}

export default AuthorForm
