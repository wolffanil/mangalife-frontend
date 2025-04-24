import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormSetError } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type TGenre } from '@/shared/schemas/genre/genre.schema'
import { GenresService } from '@/shared/services/genre.service'
import { type IGenre } from '@/shared/types/genre.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useUpdateGenre({
	genreId,
	setError
}: {
	genreId: string
	setError: UseFormSetError<TGenre>
}) {
	const queryClient = useQueryClient()

	const { mutateAsync: updateGenre, isPending: isUpdatingGenre } =
		useMutation({
			mutationKey: [MUTATION_KEYS.UPDATE_GENRE],
			mutationFn: (data: TGenre) => GenresService.update(genreId, data),
			onSuccess: updateGenre => {
				handleToast('success', 'жанр обнавлён')
				queryClient.setQueryData(
					[QUERY_KEYS.GENRES],
					(data: IGenre[]) =>
						data.map(genre =>
							genre._id === genreId
								? { ...genre, ...updateGenre }
								: genre
						)
				)
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	return useMemo(
		() => ({
			updateGenre,
			isUpdatingGenre
		}),
		[updateGenre, isUpdatingGenre]
	)
}
