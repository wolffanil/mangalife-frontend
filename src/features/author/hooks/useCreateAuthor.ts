import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type TAuthor } from '@/shared/schemas/author/author.schema'
import { AuthorsService } from '@/shared/services/author.service'
import { type IAuthor } from '@/shared/types/author.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useCreateAuthor(
	setError: UseFormSetError<TAuthor>,
	reset: UseFormReset<TAuthor>
) {
	const queryClient = useQueryClient()

	const { mutateAsync: createAuthor, isPending: isCreatingAuthor } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_AUTHOR],
			mutationFn: (data: TAuthor) => AuthorsService.create(data),
			onSuccess: author => {
				handleToast('success', 'автор создан')
				queryClient.setQueryData(
					[QUERY_KEYS.AUTHORS],
					(data: IAuthor[]) =>
						data?.length
							? [...data, { ...author }]
							: [{ ...author }]
				)
				reset()
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	return useMemo(
		() => ({
			createAuthor,
			isCreatingAuthor
		}),
		[createAuthor, isCreatingAuthor]
	)
}
