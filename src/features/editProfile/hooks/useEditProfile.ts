import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormSetError, UseFormSetValue } from 'react-hook-form'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { useCurrent } from '@/shared/hooks/useCurrent'
import { useUploadPhoto } from '@/shared/hooks/useUploadPhoto'
import { type TEditProfileEdit } from '@/shared/schemas/profile/edit-profile'
import { UserService } from '@/shared/services/user.service'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useEditProfile({
	setError,
	setValue
}: {
	setError: UseFormSetError<TEditProfileEdit>
	setValue: UseFormSetValue<TEditProfileEdit>
}) {
	const { uploadFile, isLoadingUplaod } = useUploadPhoto({
		folder: 'profile'
	})

	const { setUser, user } = useCurrent()

	const { mutateAsync: updateProfile, isPending: isUpdatingProfile } =
		useMutation({
			mutationKey: [MUTATION_KEYS.EDIT_PROFILE],
			mutationFn: (data: TEditProfileEdit & { picture: string }) =>
				UserService.updateProfile(data),
			onSuccess: async data => {
				setUser({ ...data })
				handleToast('success', 'профиль успешно обновлён')
			},
			onError: (errors: any) => {
				handleErrors(errors, setError)
			}
		})

	async function handleUpdateProfile(data: TEditProfileEdit) {
		let picture = user?.picture ?? ''
		if (isUpdatingProfile) return

		if (data?.file?.length) {
			const url = await uploadFile(data?.file)

			if (!url) return

			//@ts-ignore
			setUser({ ...user, picture: url })
			setValue('file', [])
			picture = url
		}

		await updateProfile({ ...data, picture })
	}

	return useMemo(
		() => ({
			handleUpdateProfile,
			isUpdatingProfile: isUpdatingProfile || isLoadingUplaod
		}),
		[handleUpdateProfile, isUpdatingProfile, isLoadingUplaod]
	)
}
