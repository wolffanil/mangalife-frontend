import { useMemo, useState } from 'react'

import { PhotoService } from '../services/photo.service'
import { handleErrors } from '../utils/handle-errors'

export const useUploadZip = ({
	folder,
	mangaId
}: {
	folder: string
	mangaId: string
}) => {
	const [isLoadingUplaodZip, setIsLoadingUploadZip] = useState(false)

	const uploadZip = async (file: File[]) => {
		if (!file) return

		setIsLoadingUploadZip(true)
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
		} finally {
			setIsLoadingUploadZip(false)
		}

		return
	}

	return useMemo(
		() => ({
			uploadZip,
			isLoadingUplaodZip
		}),
		[uploadZip, isLoadingUplaodZip]
	)
}
