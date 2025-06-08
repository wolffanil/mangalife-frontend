'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import { TAuthor, authorSchema } from '@/shared/schemas/author/author.schema'
import type { IAuthor } from '@/shared/types/author.interface'
import { cn } from '@/shared/utils/tw-merge'

import { useDeleteAuthor } from './hooks/useDeleteAuthor'
import { useUpdateAuthor } from './hooks/useUpdateAuthor'

interface AuthorItemProps {
	author: IAuthor
	index: number
	isLastItem: boolean
}

function AuthorItem({ author, index, isLastItem }: AuthorItemProps) {
	const [isEdit, setIsEdit] = useState(false)

	const { control, handleSubmit, setError } = useForm({
		resolver: zodResolver(authorSchema),
		defaultValues: {
			name: author?.name ?? ''
		}
	})

	const { updateAuthor, isUpdatingAuthor } = useUpdateAuthor({
		authorId: author._id,
		setError
	})

	const { deleteAuthor, isDeletingAuthor } = useDeleteAuthor(author._id)

	const handleUpdate = async (data: TAuthor) => {
		await updateAuthor(data, {
			onSuccess: () => {
				setIsEdit(false)
			}
		})
	}

	const isLoading = isDeletingAuthor || isUpdatingAuthor

	return (
		<form onSubmit={handleSubmit(handleUpdate)} className='flex'>
			<div
				className={cn('manage__item manage__item-index', {
					'rounded-bl-[29px]': isLastItem
				})}
			>
				{index + 1}
			</div>
			<div className='manage__item manage__item-name'>
				{isEdit ? (
					<Field<TAuthor>
						control={control}
						name='name'
						placeholder='имя автора'
						classNameContainer='w-[114px]'
						classNameInput='text-main-color'
						disabled={isLoading}
					/>
				) : (
					author.name
				)}
			</div>
			<div className='manage__item manage__item-updatedAt'>
				{author.updatedAt}
			</div>
			<div
				className={cn('manage__item manage__item-actions w-[419px]', {
					'rounded-br-[29px]': isLastItem
				})}
			>
				<div className='flex h-[45px] w-[329px] items-center gap-x-[20px]'>
					{isEdit ? (
						<Button
							type='submit'
							className='h-full w-[174px] rounded-[50px] text-[16px]'
							disabled={isLoading}
						>
							Сохранить
						</Button>
					) : (
						<button
							type='button'
							className='flex h-full w-[174px] items-center justify-center rounded-[50px] border border-main-color bg-yellow font-open_sans-semibold text-[16px] font-semibold text-main-color'
							onClick={() => setIsEdit(true)}
						>
							Редактировать
						</button>
					)}
					<button
						type='button'
						onClick={() => deleteAuthor()}
						className='flex h-full w-[135px] items-center justify-center rounded-[50px] bg-[#F46E6E] font-open_sans-semibold text-[16px] font-semibold text-yellow'
						disabled={isLoading}
					>
						Удалить
					</button>
				</div>
			</div>
		</form>
	)
}

export default AuthorItem
