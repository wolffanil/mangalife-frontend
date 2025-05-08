'use client'

import { Controller } from 'react-hook-form'

import { cn } from '@/shared/utils/tw-merge'

import FileUploader from './Uploader/FileUploader'
import type { IField } from './field.interface'

const FileUploaderField = <T extends Record<string, any>>({
	control,
	name,
	className,
	classNameInput,
	classNameInputError,
	classNameContainer,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange }, fieldState: { error } }) => (
				<div
					className={cn(
						'flex w-full flex-col items-start',
						classNameContainer
					)}
				>
					<FileUploader fieldChange={onChange} {...rest} />
					{error && (
						<p
							className={cn(
								'input__message_error mt-[5px] xl:mt-[8px]',
								classNameInputError
							)}
						>
							{error.message}
						</p>
					)}
				</div>
			)}
		/>
	)
}

export default FileUploaderField
