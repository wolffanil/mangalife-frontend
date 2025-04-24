import { z } from 'zod'

export const registerSchema = z.object({
	nickname: z
		.string({ message: 'Ник обязателен' })
		.min(4, { message: 'должен содержать не менее 4 символов' })
		.trim(),
	email: z
		.string({ message: 'почта обязательна' })
		.email({ message: 'почта должна быть корректной' })
		.trim(),
	password: z
		.string({ message: 'пароль обязателен' })
		.min(6, { message: 'минимум 6 символов' })
		.trim()
})

export type TypeRegisterSchema = z.infer<typeof registerSchema>
