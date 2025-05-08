import { z } from 'zod'

export const createChapterSchema = z.object({
	chapter: z.coerce
		.number({ message: 'Глава должна быть' })
		.gte(0, { message: 'Глава должна начинаться с 0 или выше' }),
	tom: z.coerce
		.number({ message: 'Том должен быть' })
		.gte(0, { message: 'Том должна начинаться с 0 или выше' }),
	name: z.string({ message: 'Название главы должно быть' }),
	pagesUrl: z.string().array().optional(),
	file: z.array(z.instanceof(File)).optional()
})

export type CreateChapterType = z.infer<typeof createChapterSchema>
