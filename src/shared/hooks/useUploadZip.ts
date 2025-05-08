import { useMemo } from 'react'

import { PhotoService } from '../services/photo.service'
import { handleErrors } from '../utils/handle-errors'

export const useUploadZip = ({
	folder,
	mangaId
}: {
	folder: string
	mangaId: string
}) => {
	const uploadZip = async (file: File[]) => {
		if (!file) return

		const formData = new FormData()
		formData.append('file', file[0])

		try {
			const pagesUrl = await PhotoService.uploadZip(
				formData,
				folder,
				mangaId
			)

			return pagesUrl
		} catch (error) {
			handleErrors(error)
		}

		return
	}

	return useMemo(
		() => ({
			uploadZip
		}),
		[uploadZip]
	)
}
