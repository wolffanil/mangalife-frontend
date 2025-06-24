'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { number } from 'zod'

import {
	Button,
	CoverUploaderField,
	Field,
	SelectMulti,
	TextAreaField
} from '@/shared/components/elements'
import SelectField from '@/shared/components/elements/form-elements/SelectField'
import {
	type TMangaForm,
	mangaSchema
} from '@/shared/schemas/manga/manga.schema'
import type { IManga } from '@/shared/types/manga.interface'

import { useGetAuthors } from '../author/hooks/useGetAuthors'
import { useGetGenres } from '../genre/hooks/useGetGenres'

import { useActionManga } from './hooks/useActionManga'
import type { TActionManga } from './manage-manga.inteface'
import {
	SELECT_MANGA_AGE_LIMIT,
	SELECT_MANGA_STATUS,
	SELECT_MANGA_TYPE
} from './select.constants'

interface MangaFormProps {
	manga?: IManga
	type: TActionManga
}

function MangaForm({ manga, type }: MangaFormProps) {
	const { handleSubmit, reset, setError, setValue, control } =
		useForm<TMangaForm>({
			resolver: zodResolver(mangaSchema),
			defaultValues: {
				title: manga?.title || '',
				titleRu: manga?.titleRu || '',
				country: manga?.country || '',
				description: manga?.description || '',
				poster: manga?.poster || '',
				file: [],
				author: manga?.author?._id ?? undefined,
				//@ts-ignore
				ageLimit: String(manga?.ageLimit) || '',
				//@ts-ignore
				year: Number(manga?.year) ?? undefined,
				genres: manga?.genres.map(genre => genre?._id) || [],
				status: manga?.status || '',
				type: manga?.type || ''
			}
		})

	const { handleManga, isLoading } = useActionManga({
		type,
		mangaId: manga?._id ?? '',
		reset,
		setError,
		setValue
	})

	const { genres, isLoadingGenres } = useGetGenres()

	const { authors, isLoadingAuthors } = useGetAuthors()

	const genresOptions =
		genres?.map(g => ({ label: g.title, value: g._id })) ?? []

	const authorsOptions =
		authors?.map(a => ({ title: a.name, value: a._id })) ?? []

	return (
		<form
			onSubmit={handleSubmit(handleManga)}
			className='mt-[40px] flex w-full flex-col items-start xl:mt-[136px]'
		>
			<p className='text-start font-antelive-bold text-[13px] font-bold text-main-color xl:text-[24px]'>
				Обложка
			</p>
			<CoverUploaderField<TMangaForm>
				control={control}
				name='file'
				mediaUrl={manga?.poster ?? ''}
				disabled={isLoading}
				classNameContainer='mt-[30px] xl:mt-[65px]'
			/>
			<div className='mt-[45px] flex flex-col items-start gap-y-[35px] xl:mt-[80px] xl:gap-y-[65px]'>
				<Field<TMangaForm>
					control={control}
					name='title'
					placeholder='Оригинальное название (без иероглифов)'
					disabled={isLoading}
					classNameInput='input__manga'
				/>
				<Field<TMangaForm>
					control={control}
					name='titleRu'
					placeholder='Название на русском'
					classNameInput='input__manga'
					disabled={isLoading}
				/>
			</div>
			<div className='mt-[35px] grid min-w-full grid-cols-2 flex-wrap items-start justify-between gap-[35px] xl:mt-[65px] xl:grid-cols-3 xl:gap-[65px]'>
				<SelectField<TMangaForm>
					control={control}
					name='type'
					titleEmpty='Тип'
					values={SELECT_MANGA_TYPE}
					disabled={isLoading}
					classNameInput='input__manga input__manga_mini'
				/>
				<SelectField<TMangaForm>
					control={control}
					name='status'
					titleEmpty='Статус'
					values={SELECT_MANGA_STATUS}
					disabled={isLoading}
					classNameInput='input__manga input__manga_mini'
				/>
				<Field<TMangaForm>
					control={control}
					name='year'
					type='number'
					disabled={isLoading}
					classNameInput='input__manga input__manga_mini'
					placeholder='Год релиза'
				/>
				<Field<TMangaForm>
					control={control}
					name='country'
					disabled={isLoading}
					classNameInput='input__manga input__manga_mini'
					placeholder='Страна'
				/>
				<SelectField<TMangaForm>
					control={control}
					name='ageLimit'
					titleEmpty='Ограничение'
					values={SELECT_MANGA_AGE_LIMIT}
					disabled={isLoading}
					classNameInput='input__manga input__manga_mini'
				/>
			</div>

			<div className='mt-[45px] flex flex-col items-start gap-y-[35px] xl:mt-[80px] xl:gap-y-[65px]'>
				<Controller
					name='genres'
					control={control}
					render={({ field, fieldState: { error } }) => (
						<SelectMulti
							error={error}
							field={field}
							placeholder='Жанры'
							options={genresOptions}
							isLoading={isLoadingGenres}
							isMulti
							disabled={isLoading || isLoadingGenres}
						/>
					)}
				/>

				<SelectField<TMangaForm>
					control={control}
					name='author'
					titleEmpty='автор'
					values={authorsOptions}
					disabled={isLoading || isLoadingAuthors}
					classNameInput='input__manga'
				/>
				<TextAreaField<TMangaForm>
					control={control}
					name='description'
					placeholder='Описание'
					disabled={isLoading}
					classNameInput='input__manga'
				/>
			</div>

			<Button
				type='submit'
				className='mt-[50px] h-[45px] w-[130px] xl:mt-[100px] xl:h-[68px] xl:w-[239px] xl:text-[20px]'
				disabled={isLoading || isLoadingAuthors || isLoadingGenres}
			>
				{isLoading
					? 'Загрузка...'
					: type === 'create'
						? 'Добавить'
						: 'Редактировать'}
			</Button>
		</form>
	)
}

export default MangaForm
