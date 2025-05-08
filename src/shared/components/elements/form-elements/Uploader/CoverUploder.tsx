'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { convertFileToUrl } from '@/shared/utils/convert-file-to-url'
import { getMediaSource } from '@/shared/utils/get-media-source'
import { cn } from '@/shared/utils/tw-merge'

import type { IUploader } from './uploader.interface'

const CoverUploader = ({
	fieldChange,
	mediaUrl,
	disabled,
	classNameInput
}: IUploader) => {
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
				accept='image/jpeg, image/webp, image/jpeg'
			/>
			{fileUrl ? (
				<div className='flex cursor-pointer flex-col items-center'>
					<img
						src={
							fileUrl?.split('/')?.includes('uploads') ||
							fileUrl?.split('//')?.includes('https:')
								? getMediaSource(fileUrl)
								: fileUrl
						}
						alt='image'
						className={cn(
							'h-[165px] w-[125px] rounded-[20px] object-cover object-top xl:h-[246px] xl:w-[186px]',
							classNameInput
						)}
					/>
				</div>
			) : (
				<div
					className={cn(
						'flex w-[125px] flex-col items-center gap-y-[5px] rounded-[20px] border border-black px-[28px] py-[42px] xl:w-[246px] xl:px-[42px] xl:py-[65px]',
						classNameInput
					)}
				>
					<Image
						src='/images/uploader.svg'
						alt='uploader'
						width={52}
						height={52}
						className='max-sm:h-[34px] max-sm:w-[35px]'
					/>
					<p className='text-start font-open_sans-regular text-[10px] text-main-color xl:text-center xl:text-[15px]'>
						Нажмите или перетащите изображение
					</p>
				</div>
			)}
		</div>
	)
}

export default CoverUploader
