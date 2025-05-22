'use client'

import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/shared/components/elements'
import { USER_URL } from '@/shared/config/url.config'

function ButtonDashboard() {
	const router = useRouter()
	const params = useParams<{ id: string }>()

	return (
		<div className='mt-[25px] flex w-[130px] flex-col items-start gap-y-[18px] xl:mt-[35px] xl:w-[170px] xl:gap-y-[23px]'>
			<Button
				onClick={() =>
					router.push(USER_URL.dashboardChapters(params.id))
				}
				className='h-[45px] w-full xl:h-[59px]'
			>
				Панель
			</Button>
		</div>
	)
}

export default ButtonDashboard
