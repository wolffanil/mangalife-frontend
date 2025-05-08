import { z } from 'zod'

export const updateImagePageSchema = z.object({
	file: z.array(z.instanceof(File)).optional(),
	image: z.string().optional()
})

export type UpdateImagePageType = z.infer<typeof updateImagePageSchema>
