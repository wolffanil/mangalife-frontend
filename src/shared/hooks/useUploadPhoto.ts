import { useMemo, useState } from 'react'

import { PhotoService } from '../services/photo.service'
import { handleErrors } from '../utils/handle-errors'

export const useUploadPhoto = ({ folder }: { folder: string }) => {
	const [isLoadingUplaod, setIsLoadingUpload] = useState(false)

	const uploadFile = async (file: File[]) => {
		if (!file) return

		setIsLoadingUpload(true)
		const formData = new FormData()
		formData.append('file', file[0])

		try {
			const url = await PhotoService.uploadProfile(formData, folder)

			return url
		} catch (error) {
			handleErrors(error)
		} finally {
			setIsLoadingUpload(false)
		}

		return
	}

	return useMemo(
		() => ({
			uploadFile,
			isLoadingUplaod
		}),
		[uploadFile, isLoadingUplaod]
	)
}
