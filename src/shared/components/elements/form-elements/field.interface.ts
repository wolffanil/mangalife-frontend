import { InputHTMLAttributes } from 'react'
import {
	Control,
	type ControllerRenderProps,
	FieldError,
	FieldPath,
	FieldValues
} from 'react-hook-form'
import { type Options } from 'react-select'

interface BaseField {
	classNameInput?: string
	classNameInputError?: string
	classNameContainer?: string
}

export interface IField<T extends FieldValues>
	extends Omit<
			InputHTMLAttributes<HTMLInputElement>,
			'onChange' | 'value' | 'onBlur'
		>,
		BaseField {
	control: Control<T>
	name: FieldPath<T>
}

export interface IFieldTextArea<T extends FieldValues>
	extends Omit<
			InputHTMLAttributes<HTMLTextAreaElement>,
			'onChange' | 'value' | 'onBlur'
		>,
		BaseField {
	control: Control<T>
	name: FieldPath<T>
}

export interface IFieldTextArea<T extends FieldValues>
	extends Omit<
			InputHTMLAttributes<HTMLTextAreaElement>,
			'onChange' | 'value' | 'onBlur'
		>,
		BaseField {
	control: Control<T>
	name: FieldPath<T>
}

export interface IFieldSelect<T extends FieldValues>
	extends Omit<
			InputHTMLAttributes<HTMLSelectElement>,
			'onChange' | 'value' | 'onBlur'
		>,
		BaseField {
	control: Control<T>
	name: FieldPath<T>
	values: {
		title: string
		value: string | number
	}[]
	titleEmpty: string
}

export interface IOption {
	label: string
	value: string
}

export interface ISelectMulti
	extends InputHTMLAttributes<HTMLSelectElement>,
		BaseField {
	options: Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	error?: FieldError | undefined
	placeholder: string
	disabled: boolean
}
