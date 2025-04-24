import { z } from 'zod'

export const authorSchema = z.object({
	name: z
		.string({ message: 'Имя автора должно быть' })
		.min(3, { message: 'минимум 3 символа' })
		.trim()
})

export type TAuthor = z.infer<typeof authorSchema>
