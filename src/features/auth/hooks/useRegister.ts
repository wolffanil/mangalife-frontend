import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { useAuth } from '@/shared/hooks/useAuth'
import type { TypeRegisterSchema } from '@/shared/schemas/auth/register'
import { AuthService } from '@/shared/services/auth/auth.service'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useRegister(
	reset: UseFormReset<TypeRegisterSchema>,
	setError: UseFormSetError<TypeRegisterSchema>
) {
	const { auth } = useAuth()

	const router = useRouter()

	const { mutateAsync: registerMutation, isPending: isLoadingRegister } =
		useMutation({
			mutationKey: [MUTATION_KEYS.REGISTER],
			mutationFn: ({
				data,
				recaptcha
			}: {
				data: TypeRegisterSchema
				recaptcha?: string
			}) => AuthService.register(data, recaptcha),
			onSuccess: data => {
				console.log(data)
				auth(data.user)
				reset()
				handleToast('success', 'Вы успешно зарегистрировались')
				router.replace(PUBLIC_URL.main())
			},
			onError: (error: any) => {
				handleErrors(error, setError)
			}
		})

	return useMemo(
		() => ({
			registerMutation,
			isLoadingRegister
		}),
		[isLoadingRegister, registerMutation]
	)
}
