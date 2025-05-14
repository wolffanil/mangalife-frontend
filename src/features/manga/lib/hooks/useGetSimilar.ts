import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { MangaService } from '@/shared/services/manga.service'
import { IMangaById } from '@/shared/types/manga.interface'
import { getMediaSource } from '@/shared/utils/get-media-source'

export function useGetSimilar() {
	const params = useParams<{ id: string }>()

	const queryClient = useQueryClient()

	const manga = queryClient.getQueryData([
		QUERY_KEYS.MANGA_BY_ID,
		params.id
	]) as IMangaById

	const authorId = manga.author._id

	const { data: similarMangas, isLoading: isLoadingMangas } = useQuery({
		queryKey: [
			QUERY_KEYS.MANGAS,
			QUERY_KEYS.GET_SIMILAR_BY_AUTHOR,
			authorId
		],
		queryFn: () => MangaService.getSimilarByAuthor(authorId),
		staleTime: 10 * 60 * 1000,
		enabled: !!authorId,
		select: data =>
			data
				?.map(manga => ({
					...manga,
					poster: getMediaSource(manga.poster)
				}))
				.filter(manga => manga._id !== params.id)
	})

	return { similarMangas, isLoadingMangas }
}
