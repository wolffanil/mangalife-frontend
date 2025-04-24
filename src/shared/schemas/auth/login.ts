import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string({ message: 'почта обязательна' })
		.email({ message: 'почта должна быть корректной' })
		.trim(),
	password: z
		.string({ message: 'пароль обязателен' })
		.min(6, { message: 'минимум 6 символов' })
		.trim()
		.optional()
})

export type TypeLoginSchema = z.infer<typeof loginSchema>
