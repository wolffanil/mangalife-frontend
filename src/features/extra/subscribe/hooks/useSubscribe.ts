import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { useAuth } from '@/shared/hooks/useAuth'
import { PremiumService } from '@/shared/services/premium.service'
import { handleErrors } from '@/shared/utils/handle-errors'
import { handleToast } from '@/shared/utils/handle-toast'

export function useSubscribe() {
	const router = useRouter()
	const { isAuthenticated } = useAuth()

	const { mutateAsync: checkout, isPending: isLoadingCheckout } = useMutation(
		{
			mutationKey: [MUTATION_KEYS.PREMIUM_CHECKOUT],
			mutationFn: () => PremiumService.place(),
			onSuccess: payment => {
				router.replace(payment)
			},
			onError: (errors: any) => {
				handleErrors(errors)
			}
		}
	)

	const handleCheckout = async () => {
		if (!isAuthenticated) {
			handleToast('info', 'Требуеться авторизация')
			router.push(PUBLIC_URL.login())
			return
		}
		await checkout()
	}

	return useMemo(
		() => ({
			handleCheckout,
			isLoadingCheckout
		}),
		[handleCheckout, isLoadingCheckout]
	)
}
