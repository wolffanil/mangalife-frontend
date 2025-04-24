'use client'

import { Button } from '@/shared/components/elements'

import { useSubscribe } from './hooks/useSubscribe'

function SubscribeButton() {
	const { handleCheckout, isLoadingCheckout } = useSubscribe()

	return (
		<Button
			onClick={handleCheckout}
			disabled={isLoadingCheckout}
			className='mx-auto mt-[43px] h-[73px] w-[205px] rounded-[90px] text-[16px] xl:mt-[95px] xl:h-[94px] xl:w-[462px] xl:text-[32px]'
		>
			{isLoadingCheckout ? 'Загрузка...' : 'Оформить'}
		</Button>
	)
}

export default SubscribeButton
