'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/components/elements'
import { USER_URL } from '@/shared/config/url.config'

function EditProfileAdmin() {
	const router = useRouter()

	return (
		<div className='mt-[25px] flex w-[130px] flex-col items-start gap-y-[18px] xl:mt-[35px] xl:w-[170px] xl:gap-y-[23px]'>
			<Button
				onClick={() => router.push(USER_URL.users())}
				className='h-[45px] w-full xl:h-[59px]'
			>
				Пользователи
			</Button>

			<Button
				onClick={() => router.push(USER_URL.reason())}
				className='h-[45px] w-full xl:h-[59px]'
			>
				Жалобы
			</Button>
		</div>
	)
}

export default EditProfileAdmin
