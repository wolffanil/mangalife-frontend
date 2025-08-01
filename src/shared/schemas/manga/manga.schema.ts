import { z } from 'zod'

export const mangaSchema = z.object({
	file: z.array(z.instanceof(File)).optional(),
	title: z
		.string({ message: 'Название должно быть' })
		.nonempty({ message: 'Название не должно быть пустым' }),
	titleRu: z
		.string({ message: 'Название на русском должно быть' })
		.nonempty({ message: 'Название на русском не должно быть пустым' }),
	description: z
		.string({ message: 'Описание должно быть' })
		.nonempty({ message: 'Описание не должно быть пустым' }),
	genres: z
		.string({ message: 'должен быть хотябе один жанр' })
		.array()
		.nonempty({ message: 'должен быть хотябе один жанр' }),
	author: z
		.string({ message: 'автор должен быть' })
		.nonempty({ message: 'автор должен быть' }),
	ageLimit: z.string({ message: 'Возрастное огрничение должно быть' }),
	year: z.coerce
		.number({ message: 'Год релиза должен быть' })
		.refine(
			val => {
				return val >= 1900
			},
			{ message: 'Год релиза должен быть минимум 1900 г' }
		)
		.refine(
			val => {
				const currentYear: number = new Date().getFullYear()
				return val <= currentYear
			},
			{ message: 'Год релиза не может быть в будущем' }
		),
	poster: z.string().optional(),
	country: z
		.string({ message: 'Страна должна быть' })
		.nonempty({ message: 'Страна не должна быть пустым' }),
	status: z
		.string({ message: 'Стетус манги должен быть' })
		.nonempty({ message: 'Стетус манги должен быть' }),
	type: z
		.string({ message: 'Тип манги должен быть' })
		.nonempty({ message: 'Тип манги должен быть' })
})

export type TMangaForm = z.infer<typeof mangaSchema>
