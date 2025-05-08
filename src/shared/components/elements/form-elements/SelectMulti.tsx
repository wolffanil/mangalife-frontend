'use client'

import { FC } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import { cn } from '@/shared/utils/tw-merge'

import { IOption, ISelectMulti } from './field.interface'

const animatedComponents = makeAnimated()

const SelectMulti: FC<ISelectMulti> = ({
	placeholder,
	error,
	isMulti,
	options,
	field,
	isLoading,
	classNameContainer,
	classNameInput,
	classNameInputError,
	disabled
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item: IOption) => item.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(
						option => field.value.indexOf(option.value) >= 0
					)
				: options.find(option => option.value === field.value)
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<div
			className={cn(
				'flex w-full flex-col items-start',
				classNameContainer
			)}
		>
			<ReactSelect
				classNamePrefix='custom-select'
				placeholder={placeholder}
				options={options}
				value={getValue()}
				onChange={onChange}
				isMulti={isMulti}
				components={animatedComponents}
				isLoading={isLoading}
				className={cn('input border-none', classNameInput)}
				isDisabled={disabled}
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
	)
}

export default SelectMulti
