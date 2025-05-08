'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import type { IUploader } from './uploader.interface'

const FileUploader = ({
	fieldChange,
	disabled
}: Omit<IUploader, 'mediaUrl'>) => {
	const [file, setFile] = useState<File[]>([])

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setFile(acceptedFiles)
			fieldChange(acceptedFiles)
		},
		[file]
	)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'.zip': []
		}
	})

	return (
		<div {...getRootProps()}>
			<input
				{...getInputProps()}
				className='cursor-pointer'
				disabled={disabled}
				accept='.zip'
			/>
			{file?.length ? (
				<div className='flex w-[125px] cursor-pointer flex-col items-center gap-y-[5px] rounded-[20px] border border-black px-[28px] py-[42px] xl:w-[246px] xl:px-[42px] xl:py-[65px]'>
					<p className='text-center text-[15px] text-main-color xl:text-[18px]'>
						Папка загружена
					</p>
				</div>
			) : (
				<div className='flex w-[125px] cursor-pointer flex-col items-center gap-y-[5px] rounded-[20px] border border-black px-[28px] py-[42px] xl:w-[246px] xl:px-[42px] xl:py-[65px]'>
					<Image
						src='/images/uploader.svg'
						alt='uploader'
						width={52}
						height={52}
						className='max-sm:h-[34px] max-sm:w-[35px]'
					/>
					<p className='text-start font-open_sans-regular text-[10px] text-main-color xl:text-center xl:text-[15px]'>
						Нажмите или перетащите папку
					</p>
				</div>
			)}
		</div>
	)
}

export default FileUploader
