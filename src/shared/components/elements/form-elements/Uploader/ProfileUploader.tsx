'use client'

import { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { convertFileToUrl } from '@/shared/utils/convert-file-to-url'
import { getMediaSource } from '@/shared/utils/get-media-source'

import { IUploader } from './uploader.interface'

const ProfileUploader = ({ fieldChange, mediaUrl, disabled }: IUploader) => {
	const [file, setFile] = useState<File[]>([])
	const [fileUrl, setFileUrl] = useState<string>(mediaUrl)

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setFile(acceptedFiles)
			fieldChange(acceptedFiles)
			setFileUrl(convertFileToUrl(acceptedFiles[0]))
		},
		[file]
	)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'image/*': ['.gif', '.jpeg', '.jpg', '.webp']
		}
	})

	return (
		<div {...getRootProps()}>
			<input
				{...getInputProps()}
				className='cursor-pointer'
				disabled={disabled}
				accept='image/gif, image/jpeg, image/webp, image/jpeg'
			/>

			<div className='flex cursor-pointer flex-col items-center'>
				<img
					src={
						fileUrl?.split('/')?.includes('uploads') ||
						fileUrl?.split('//')?.includes('https:')
							? getMediaSource(fileUrl)
							: fileUrl
					}
					alt='image'
					className='size-[123px] rounded-full object-cover object-top xl:size-[167px]'
				/>
			</div>
		</div>
	)
}

export default ProfileUploader
