import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useCurrent } from '@/shared/hooks/useCurrent'
import { CreateReviewType } from '@/shared/schemas/review/create-review'
import { ReviewService } from '@/shared/services/review.service'
import type { ICreateReview, IReview } from '@/shared/types/review.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useCreateReview(
	setError: UseFormSetError<CreateReviewType>,
	reset: UseFormReset<CreateReviewType>,
	parentId?: string
) {
	const queryClient = useQueryClient()
	const { user } = useCurrent()
	const params = useParams<{ id: string }>()

	const { mutateAsync: createReview, isPending: isCreatingReview } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_REVIEW],
			mutationFn: (data: ICreateReview) => ReviewService.create(data),
			onSuccess: newReview => {
				handleToast('success', 'отзыв создан')
				const review = {
					...newReview,
					user: {
						_id: user?._id,
						picture: user?.picture,
						nickname: user?.nickname
					}
				}
				if (parentId) {
					queryClient.setQueryData(
						[QUERY_KEYS.REVIEWS_BY_PARENT, parentId],
						(data: IReview[]) => {
							// const isExist = data?.length
							// 	? data.some(r => r._id === review._id)
							// 	: false
							const isExist = false

							if (!data?.length) return [{ ...review }]

							return isExist
								? data.map(r =>
										r._id === review._id
											? { ...r, text: review.text }
											: r
									)
								: [...data, { ...review }]
						}
					)

					reset()
					return
				}

				queryClient.setQueryData(
					[QUERY_KEYS.REVIEWS_BY_MANGA, params.id],
					(data: IReview[]) => {
						const isExist = data?.length
							? data.some(r => r._id === review._id)
							: false

						if (!data?.length) return [{ ...review }]

						return isExist
							? data.map(r =>
									r._id === review._id
										? {
												...r,
												text: review.text,
												rating: review.rating
											}
										: r
								)
							: [...data, { ...review }]
					}
				)

				reset()
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	async function handleCreate(data: CreateReviewType, rating?: number) {
		if (parentId) {
			await createReview({ ...data, parent: parentId, manga: params.id })
			return
		}
		if (!rating) {
			handleToast('error', 'Оценка обязательна')
			return
		}

		await createReview({ ...data, manga: params.id, rating })
	}

	return useMemo(
		() => ({
			handleCreate,
			isCreatingReview
		}),
		[handleCreate, isCreatingReview]
	)
}
