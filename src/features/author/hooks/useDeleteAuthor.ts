import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { AuthorsService } from '@/shared/services/author.service'
import { IAuthor } from '@/shared/types/author.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useDeleteAuthor(authorId: string) {
	const queryClient = useQueryClient()

	const { mutateAsync: deleteAuthor, isPending: isDeletingAuthor } =
		useMutation({
			mutationKey: [MUTATION_KEYS.DELETE_AUTHOR],
			mutationFn: () => AuthorsService.delete(authorId),
			onSuccess: () => {
				handleToast('success', 'автор успешно удалён')

				queryClient.setQueryData(
					[QUERY_KEYS.AUTHORS],
					(data: IAuthor[]) =>
						data.filter(data => data._id !== authorId)
				)

				queryClient.setQueryData(
					[QUERY_KEYS.AUTHOR_BY_ID, authorId],
					{}
				)
			},
			onError: (errors: any) => {
				handleErrors(errors)
			}
		})

	return useMemo(
		() => ({
			deleteAuthor,
			isDeletingAuthor
		}),
		[deleteAuthor, isDeletingAuthor]
	)
}
