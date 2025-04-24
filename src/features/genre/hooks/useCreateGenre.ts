import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type TGenre } from '@/shared/schemas/genre/genre.schema'
import { GenresService } from '@/shared/services/genre.service'
import { type IGenre } from '@/shared/types/genre.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useCreateGenre(
	setError: UseFormSetError<TGenre>,
	reset: UseFormReset<TGenre>
) {
	const queryClient = useQueryClient()

	const { mutateAsync: createGenre, isPending: isCreatingGenre } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_GENRE],
			mutationFn: (data: TGenre) => GenresService.create(data),
			onSuccess: genre => {
				handleToast('success', 'жанр создан')
				console.log(genre, 'new')
				queryClient.setQueryData(
					[QUERY_KEYS.GENRES],
					(data: IGenre[]) =>
						data?.length ? [...data, { ...genre }] : [{ ...genre }]
				)
				reset()
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	return useMemo(
		() => ({
			createGenre,
			isCreatingGenre
		}),
		[createGenre, isCreatingGenre]
	)
}
