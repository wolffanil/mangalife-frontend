import { z } from 'zod'

export const createSingleShcema = z.object({
	file: z.array(z.instanceof(File)).optional(),
	image: z.string().optional()
})

export type CreateSinglePageType = z.infer<typeof createSingleShcema>
