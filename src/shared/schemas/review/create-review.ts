import { z } from 'zod'

export const createReviewSchema = z.object({
	text: z
		.string({ message: 'Текст должен быть' })
		.nonempty({ message: 'Текст должен быть' })
})

export type CreateReviewType = z.infer<typeof createReviewSchema>
