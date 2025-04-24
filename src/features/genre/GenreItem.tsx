'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import { TGenre, genreSchema } from '@/shared/schemas/genre/genre.schema'
import type { IGenre } from '@/shared/types/genre.interface'
import { cn } from '@/shared/utils/tw-merge'

import { useDeleteGenre } from './hooks/useDeleteGenre'
import { useUpdateGenre } from './hooks/useUpdateGenre'

interface GenreItemProps {
	genre: IGenre
	index: number
	isLastItem: boolean
}

function GenreItem({ genre, index, isLastItem }: GenreItemProps) {
	const [isEdit, setIsEdit] = useState(false)

	const { control, handleSubmit, setError } = useForm({
		resolver: zodResolver(genreSchema),
		defaultValues: {
			title: genre?.title ?? ''
		}
	})

	const { updateGenre, isUpdatingGenre } = useUpdateGenre({
		genreId: genre._id,
		setError
	})

	const { deleteGenre, isDeletingGenre } = useDeleteGenre(genre._id)

	const handleUpdate = async (data: TGenre) => {
		await updateGenre(data, {
			onSuccess: () => {
				setIsEdit(false)
			}
		})
	}

	const isLoading = isDeletingGenre || isUpdatingGenre

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
					<Field<TGenre>
						control={control}
						name='title'
						placeholder='название жанра'
						classNameContainer='w-[114px]'
						classNameInput='text-main-color'
						disabled={isLoading}
					/>
				) : (
					genre.title
				)}
			</div>
			<div className='manage__item manage__item-updatedAt'>
				{genre.updatedAt}
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
							Редактирровать
						</button>
					)}
					<button
						type='button'
						onClick={() => deleteGenre()}
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

export default GenreItem
