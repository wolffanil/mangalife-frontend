'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import {
	type UpdateChapterType,
	updateChapterSchema
} from '@/shared/schemas/chapter/update-chapter.schema'
import { chapterStore } from '@/shared/store/chapter/chapter.store'

import { useUpdateChapter } from '../hooks/useUpdateChapter'

function UpdateChapter() {
	const selectChapter = chapterStore(state => state.chapter)

	const { handleSubmit, setError, control, setValue } =
		useForm<UpdateChapterType>({
			resolver: zodResolver(updateChapterSchema),
			defaultValues: {
				tom: Number(selectChapter?.tom),
				chapter: Number(selectChapter?.chapter),
				name: selectChapter?.name
			}
		})

	useEffect(() => {
		setValue('tom', Number(selectChapter?.tom))
		setValue('chapter', Number(selectChapter?.chapter))

		setValue('name', selectChapter?.name ?? '')
	}, [selectChapter?._id])

	const { handleUpdateChapter, isUpdatingChapter } =
		useUpdateChapter(setError)

	return (
		<form
			onSubmit={handleSubmit(handleUpdateChapter)}
			className='mt-[35px] flex w-full max-w-full flex-col items-start xl:mt-[45px]'
		>
			<div className='flex w-full flex-col items-start justify-between xl:flex-row xl:items-end xl:gap-x-[30px]'>
				<div className='flex w-[154px] items-start justify-between gap-x-[10px] xl:w-[240px] xl:gap-x-[30px]'>
					<Field
						control={control}
						name='chapter'
						disabled={isUpdatingChapter}
						type='number'
						placeholder='Том'
						classNameContainer='w-[72px] xl:w-[105px]'
					/>
					<Field
						control={control}
						name='tom'
						disabled={isUpdatingChapter}
						type='number'
						placeholder='Глава'
						classNameContainer='w-[72px] w-[105px]'
					/>
				</div>
				<Field
					control={control}
					name='name'
					placeholder='Название'
					disabled={isUpdatingChapter}
					classNameContainer='w-full xl:w-[930px] mt-[35px] xl:mt-0'
				/>

				<Button
					type='submit'
					disabled={isUpdatingChapter}
					className='mt-[25px] h-[45px] w-[130px] rounded-[90px] xl:ml-auto xl:mt-0 xl:h-[66px] xl:w-[198px] xl:rounded-[50px]'
				>
					{isUpdatingChapter ? 'Загрузк...' : 'Сохранить'}
				</Button>
			</div>
		</form>
	)
}

export default UpdateChapter
