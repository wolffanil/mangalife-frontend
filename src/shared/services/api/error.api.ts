export const errorCatch = (error: any): string => {
	const message = error?.response?.data?.message

	return message
		? typeof error?.message?.data?.message === 'object'
			? message[0]
			: message
		: error?.message
}
