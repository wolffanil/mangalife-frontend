'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, CoverUploaderField } from '@/shared/components/elements'
import {
	CreateSinglePageType,
	createSingleShcema
} from '@/shared/schemas/page/create-single-page.schema'

import { useCreateSinglePage } from '../hooks/useCreateSinglePage'

function CreatePage() {
	const { handleSubmit, control, setError, setValue, reset, watch } =
		useForm<CreateSinglePageType>({
			resolver: zodResolver(createSingleShcema),
			defaultValues: {
				file: [],
				image: ''
			}
		})

	const { handleCreatePage, isCreatingPage } = useCreateSinglePage(
		setError,
		setValue,
		reset
	)

	const array = watch(['file', 'image'])

	return (
		<form onSubmit={handleSubmit(handleCreatePage)} className='w-[125px]'>
			<CoverUploaderField<CreateSinglePageType>
				control={control}
				name='file'
				mediaUrl={array[1] ?? ''}
				disabled={isCreatingPage}
				key={array[1]}
				classNameContainer='xl:!w-[187px]'
				classNameInput='xl:!w-[187px]'
			/>
			{array[0]?.length || array[1] ? (
				<Button
					className='mt-[20px] h-[45px] w-full'
					disabled={isCreatingPage}
				>
					Создать
				</Button>
			) : null}
		</form>
	)
}

export default CreatePage
