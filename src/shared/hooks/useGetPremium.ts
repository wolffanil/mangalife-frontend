import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '../enums/query.keys'
import { PremiumService } from '../services/premium.service'

import { useAuth } from './useAuth'

export function useGetPremium() {
	const { isAuthenticated } = useAuth()

	const { data: premium, isLoading: isLoadingPremium } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_PREMIUM],
		queryFn: () => PremiumService.exist(),
		enabled: isAuthenticated
	})

	return {
		premium,
		isLoadingPremium
	}
}
