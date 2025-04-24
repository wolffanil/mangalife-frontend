type toastType = 'success' | 'error' | 'info'

export async function handleToast(toastType: toastType, message: string) {
	const { toast } = await import('react-toastify')

	toast[toastType]?.(message)
	return
}
