'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryState } from 'nuqs'
import { useForm } from 'react-hook-form'

import { Button, Field, FileUploaderField } from '@/shared/components/elements'
import {
	type CreateChapterType,
	createChapterSchema
} from '@/shared/schemas/chapter/create-chapter.schema'

import { useCreateChapter } from './hooks/useCreateChapter'

function CreateChapterForm() {
	const [chapter] = useQueryState('chapter')
	const [tom] = useQueryState('tom')

	const { control, setError, setValue, handleSubmit, reset } =
		useForm<CreateChapterType>({
			resolver: zodResolver(createChapterSchema),
			defaultValues: {
				tom: tom ? Number(tom) : undefined,
				chapter: chapter ? Number(chapter) + 1 : undefined
			}
		})

	const { handleCreateChapter, isCreatingChapter } = useCreateChapter({
		reset,
		setValue,
		setError
	})

	return (
		<form
			onSubmit={handleSubmit(handleCreateChapter)}
			className='mt-[42px] flex w-full max-w-full flex-col items-start xl:mt-[30px]'
		>
			<div className='flex flex-col items-start justify-between gap-y-[35px] xl:flex-row xl:gap-x-[30px] xl:gap-y-0'>
				<div className='flex w-[154px] items-start justify-between gap-x-[10px] xl:w-[240px] xl:gap-x-[30px]'>
					<Field
						control={control}
						name='tom'
						disabled={isCreatingChapter}
						type='number'
						placeholder='Том'
						classNameContainer='w-[72px] xl:w-[105px]'
					/>
					<Field
						control={control}
						name='chapter'
						disabled={isCreatingChapter}
						type='number'
						placeholder='Глава'
						classNameContainer='w-[72px] w-[105px]'
					/>
				</div>
				<Field
					control={control}
					name='name'
					placeholder='Название'
					disabled={isCreatingChapter}
					classNameContainer='w-full xl:w-[863px]'
				/>

				<Button
					type='submit'
					disabled={isCreatingChapter}
					className='hidden h-[66px] w-[198px] xl:block'
				>
					{isCreatingChapter ? 'Загрузк...' : 'Создать'}
				</Button>
			</div>

			<FileUploaderField
				control={control}
				name='file'
				disabled={isCreatingChapter}
				classNameContainer='mt-[59px] xl:mt-[110px]'
			/>

			<Button
				type='submit'
				disabled={isCreatingChapter}
				className='mt-[50px] h-[45px] w-[130px] xl:hidden'
			>
				{isCreatingChapter ? 'Загрузк...' : 'Создать'}
			</Button>
		</form>
	)
}

export default CreateChapterForm
