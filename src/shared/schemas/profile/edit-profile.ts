import { z } from 'zod'

export const editProfileSchema = z.object({
	nickname: z
		.string({ message: 'Ник обязателен' })
		.min(4, { message: 'должен содержать не менее 4 символов' })
		.trim(),
	file: z.array(z.instanceof(File)).optional(),
	bio: z
		.string()
		.min(10, { message: 'биография должна быть минимум 10 символов' })
		.optional(),
	gender: z
		.enum(['мужской', 'женский'], {
			message: 'Пол должен быть мужским или женским'
		})
		.optional()
})

export type TEditProfileEdit = z.infer<typeof editProfileSchema>
