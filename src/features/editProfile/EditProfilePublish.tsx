'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/components/elements'
import { USER_URL } from '@/shared/config/url.config'

function EditProfilePublish() {
	const router = useRouter()

	return (
		<div className='mt-[18px] flex w-[130px] flex-col items-start gap-y-[18px] xl:mt-[23px] xl:w-[170px] xl:gap-y-[23px]'>
			<Button
				onClick={() => router.push(USER_URL.manageGenres())}
				className='h-[45px] w-full xl:h-[59px]'
			>
				Жанры
			</Button>

			<Button
				onClick={() => router.push(USER_URL.manageAuthors())}
				className='h-[45px] w-full xl:h-[59px]'
			>
				Авторы
			</Button>
			<Button
				onClick={() => router.push(USER_URL.allMangas())}
				className='h-[45px] w-full xl:h-[59px]'
			>
				Манги
			</Button>

			<Button
				onClick={() => router.push(USER_URL.createManga())}
				className='h-[45px] w-full xl:h-[59px]'
			>
				Создать мангу
			</Button>
		</div>
	)
}

export default EditProfilePublish
