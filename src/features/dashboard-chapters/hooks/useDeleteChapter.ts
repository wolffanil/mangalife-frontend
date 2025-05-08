import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { USER_URL } from '@/shared/config/url.config'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { useActionPage } from '@/shared/hooks/page/usePage'
import { ChapterService } from '@/shared/services/chapter.service'
import { chapterStore } from '@/shared/store/chapter/chapter.store'
import type { IChapter } from '@/shared/types/chapter.interface'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useDeleteChapter() {
	const router = useRouter()
	const params = useParams<{ mangaId: string }>()
	const queryClient = useQueryClient()
	const removeChapter = chapterStore(state => state.remove)
	const selectChapter = chapterStore(state => state.chapter)
	const { remove: removePage } = useActionPage()

	const { mutateAsync: deleteChapter, isPending: isDeletingChapter } =
		useMutation({
			mutationKey: [MUTATION_KEYS.DELETE_CHAPTER],
			mutationFn: () => ChapterService.delete(selectChapter?._id ?? ''),
			onError: (errors: any) => {
				handleErrors(errors)
			},
			onSuccess: () => {
				handleToast('success', 'Глава успешно удалена')

				queryClient.removeQueries({
					queryKey: [
						QUERY_KEYS.AUTH,
						QUERY_KEYS.CHAPTER_BY_ID,
						selectChapter?._id
					]
				})
				queryClient.setQueryData(
					[
						QUERY_KEYS.AUTH,
						QUERY_KEYS.CHAPTERS_BY_MANGA_Id,
						params.mangaId
					],
					(data: IChapter[]) =>
						data.filter(
							chapter => chapter._id !== selectChapter?._id
						)
				)
				removeChapter()
				removePage()
				router.replace(USER_URL.createChapter(params.mangaId))
			}
		})

	const handleDeleteChapter = async () => {
		await deleteChapter()
	}

	return useMemo(
		() => ({
			handleDeleteChapter,
			isDeletingChapter
		}),
		[handleDeleteChapter, isDeletingChapter]
	)
}
