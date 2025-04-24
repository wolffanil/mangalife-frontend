'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
	Button,
	Field,
	ProfileUploaderField,
	TextAreaField
} from '@/shared/components/elements'
import SelectField from '@/shared/components/elements/form-elements/SelectField'
import { useCurrent } from '@/shared/hooks/useCurrent'
import {
	TEditProfileEdit,
	editProfileSchema
} from '@/shared/schemas/profile/edit-profile'

import { useEditProfile } from './hooks/useEditProfile'

function EditProfileForm() {
	const { user } = useCurrent()

	const { control, setError, handleSubmit, setValue } =
		useForm<TEditProfileEdit>({
			resolver: zodResolver(editProfileSchema),
			defaultValues: {
				nickname: user?.nickname ?? 'sdfsdf',
				bio: user?.bio ?? undefined,
				gender: user?.gender ?? undefined,
				file: []
			}
		})

	const { handleUpdateProfile, isUpdatingProfile } = useEditProfile({
		setError,
		setValue
	})

	return (
		<form
			onSubmit={handleSubmit(handleUpdateProfile)}
			className='mt-[66px] flex w-full max-w-[215px] flex-col items-start xl:mt-[100px] xl:max-w-[730px]'
		>
			<h2 className='font-antelive-bold text-[16px] font-bold text-main-color xl:text-[24px]'>
				Фотография
			</h2>
			<ProfileUploaderField<TEditProfileEdit>
				control={control}
				name='file'
				mediaUrl={user?.picture ?? ''}
				disabled={isUpdatingProfile}
				classNameContainer='mt-[30px] xl:mt-[65px]'
			/>

			<div className='mt-[45px] flex w-full flex-col items-start gap-y-[35px] xl:mt-[81px] xl:gap-y-[65px]'>
				<Field<TEditProfileEdit>
					control={control}
					name='nickname'
					disabled={isUpdatingProfile}
					placeholder='Никнейм'
				/>

				<SelectField<TEditProfileEdit>
					control={control}
					name='gender'
					titleEmpty='Пол'
					values={[
						{
							value: 'мужской',
							title: 'мужской'
						},
						{
							value: 'женский',
							title: 'женский'
						}
					]}
				/>

				<TextAreaField<TEditProfileEdit>
					control={control}
					name='bio'
					disabled={isUpdatingProfile}
					placeholder='О себе'
				/>
			</div>

			<Button
				type='submit'
				disabled={isUpdatingProfile}
				className='mt-[50px] h-[45px] w-[130px] rounded-[90px] xl:h-[59px] xl:w-[170px]'
			>
				{isUpdatingProfile ? 'Загрузка...' : 'Сохранить'}
			</Button>
		</form>
	)
}

export default EditProfileForm
