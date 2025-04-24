import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormSetError } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type TAuthor } from '@/shared/schemas/author/author.schema'
import { AuthorsService } from '@/shared/services/author.service'
import { type IAuthor } from '@/shared/types/author.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useUpdateAuthor({
	authorId,
	setError
}: {
	authorId: string
	setError: UseFormSetError<TAuthor>
}) {
	const queryClient = useQueryClient()

	const { mutateAsync: updateAuthor, isPending: isUpdatingAuthor } =
		useMutation({
			mutationKey: [MUTATION_KEYS.UPDATE_AUTHOR],
			mutationFn: (data: TAuthor) =>
				AuthorsService.update(authorId, data),
			onSuccess: updateAuthor => {
				handleToast('success', 'автор обнавлён')
				queryClient.setQueryData(
					[QUERY_KEYS.AUTHORS],
					(data: IAuthor[]) =>
						data.map(author =>
							author._id === authorId
								? { ...author, ...updateAuthor }
								: author
						)
				)
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	return useMemo(
		() => ({
			updateAuthor,
			isUpdatingAuthor
		}),
		[updateAuthor, isUpdatingAuthor]
	)
}
