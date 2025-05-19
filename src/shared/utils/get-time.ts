export function formatTime(timestamp: Date | string): string {
	const date = new Date(timestamp)
	const hours = date.getHours()
	const minutes = date.getMinutes()

	const formattedHours = hours.toString().padStart(2, '0')
	const formattedMinutes = minutes.toString().padStart(2, '0')

	return `${formattedHours}:${formattedMinutes}`
}
