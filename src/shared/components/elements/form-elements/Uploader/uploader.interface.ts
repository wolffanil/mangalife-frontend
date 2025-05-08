export interface IUploader {
	fieldChange: (files: File[]) => void
	mediaUrl: string
	disabled?: boolean
	classNameInput?: string
}
