import { z } from 'zod'

export const genreSchema = z.object({
	title: z
		.string({ message: 'Имя жанра должно быть' })
		.min(3, { message: 'минимум 3 символа' })
		.trim()
})

export type TGenre = z.infer<typeof genreSchema>
