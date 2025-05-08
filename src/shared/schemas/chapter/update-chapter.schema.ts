import { z } from 'zod'

export const updateChapterSchema = z.object({
	chapter: z.coerce
		.number({ message: 'Глава должна быть' })
		.gte(1, { message: 'Глава должна начинаться с 1 или выше' }),
	tom: z.coerce
		.number({ message: 'Том должен быть' })
		.gte(1, { message: 'Том должна начинаться с 1 или выше' }),
	name: z.string({ message: 'Название главы должно быть' }).trim()
})

export type UpdateChapterType = z.infer<typeof updateChapterSchema>
