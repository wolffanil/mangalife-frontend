'use client'

import { Controller } from 'react-hook-form'

import { cn } from '@/shared/utils/tw-merge'

import type { IField } from './field.interface'
import ProfileUploader from './profileUploader/ProfileUploader'

const Field = <T extends Record<string, any>>({
	control,
	name,
	className,
	classNameInput,
	classNameInputError,
	classNameContainer,
	mediaUrl,
	...rest
}: IField<T> & { mediaUrl: string }): JSX.Element => {
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
					<ProfileUploader
						fieldChange={onChange}
						mediaUrl={mediaUrl}
						{...rest}
					/>
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

export default Field
