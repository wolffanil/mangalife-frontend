import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { GenresService } from '@/shared/services/genre.service'
import { IGenre } from '@/shared/types/genre.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useDeleteGenre(genreId: string) {
	const queryClient = useQueryClient()

	const { mutateAsync: deleteGenre, isPending: isDeletingGenre } =
		useMutation({
			mutationKey: [MUTATION_KEYS.DELETE_GENRE],
			mutationFn: () => GenresService.delete(genreId),
			onSuccess: () => {
				handleToast('success', 'автор успешно удалён')

				queryClient.setQueryData(
					[QUERY_KEYS.GENRES],
					(data: IGenre[]) =>
						data.filter(data => data._id !== genreId)
				)

				queryClient.setQueryData([QUERY_KEYS.GENRE_BY_ID, genreId], {})
			},
			onError: (errors: any) => {
				handleErrors(errors)
			}
		})

	return useMemo(
		() => ({
			deleteGenre,
			isDeletingGenre
		}),
		[deleteGenre, isDeletingGenre]
	)
}
