import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { useAuth } from '@/shared/hooks/useAuth'
import { TypeLoginSchema } from '@/shared/schemas/auth/login'
import { AuthService } from '@/shared/services/auth/auth.service'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

interface IUseLogin {
	reset: UseFormReset<TypeLoginSchema>
	setError: UseFormSetError<TypeLoginSchema>
	setIsShowPassword: Dispatch<SetStateAction<boolean>>
}

export function useLogin({ reset, setError, setIsShowPassword }: IUseLogin) {
	const { auth } = useAuth()

	const router = useRouter()

	const { mutateAsync: checkEmailMutation, isPending: isLoadingCheckEmail } =
		useMutation({
			mutationKey: [MUTATION_KEYS.EMAIL_CHECK],
			mutationFn: ({
				data,
				recaptcha
			}: {
				data: TypeLoginSchema
				recaptcha?: string
			}) => AuthService.checkEmail(data, recaptcha),
			onSuccess: () => {
				setIsShowPassword(true)
			},
			onError: (error: any) => {
				handleErrors(error, setError)
			}
		})

	const { mutateAsync: loginMutation, isPending: isLoadingLogin } =
		useMutation({
			mutationKey: [MUTATION_KEYS.LOGIN],
			mutationFn: ({
				data,
				recaptcha
			}: {
				data: TypeLoginSchema
				recaptcha?: string
			}) => AuthService.login(data, recaptcha),
			onSuccess: data => {
				auth(data?.user)
				reset()
				handleToast('success', 'Добро пожаловать обратно')
				router.replace(PUBLIC_URL.main())
			},
			onError: (error: any) => {
				handleErrors(error, setError)
			}
		})

	const isLoading = isLoadingCheckEmail || isLoadingLogin

	return useMemo(
		() => ({
			isLoading,
			checkEmailMutation,
			loginMutation
		}),
		[isLoading, checkEmailMutation, loginMutation]
	)
}
