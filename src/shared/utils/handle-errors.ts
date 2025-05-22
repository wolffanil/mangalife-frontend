import { UseFormSetError } from 'react-hook-form'

import { handleToast } from './handle-toast'

type ErrorObject = {
	field?: string
	message: string
}

type ErrorInput = ErrorObject[] | ErrorObject | string

export async function handleErrors(
	stackError: any,
	setError?: UseFormSetError<any>
) {
	const errorForm = stackError?.response?.data?.errors as ErrorInput
	const errorMessage = stackError?.response?.data?.message
	if (Array.isArray(errorForm)) {
		errorForm.forEach(err => {
			if (err && err.field && err.message) {
				const { field, message } = err

				if (setError) {
					setError(field, { type: 'manual', message })
				}
			}
		})
	} else if (typeof errorMessage === 'string') {
		await handleToast('error', errorMessage)
	} else {
		await handleToast('error', 'Произошла ошибка. Попробуйте еще раз.')
	}
}
