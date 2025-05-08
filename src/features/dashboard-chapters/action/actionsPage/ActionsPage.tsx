'use client'

import Image from 'next/image'

import { useActionPage } from '@/shared/hooks/page/usePage'

import DeletePage from './DeletePage'
import UpdateImagePage from './UpdateImagePage'

function ActionsPage() {
	const { remove } = useActionPage()

	return (
		<div className='mt-[35px] flex w-full flex-col items-start gap-y-[31px] rounded-[15px] border border-green p-[21px] xl:mt-[50px] xl:flex-row xl:items-center xl:gap-y-0 xl:px-[30px] xl:py-[37px]'>
			<div className='flex w-full items-center justify-between'>
				<p className='font-open_sans-semibold text-[13px] font-semibold text-main-color xl:text-[20px]'>
					Выбрано 1
				</p>
				<button onClick={remove} className='xl:hidden'>
					<Image
						src='/images/close.svg'
						unoptimized
						width={25}
						height={21}
						alt='close'
						className='object-cover'
					/>
				</button>
			</div>
			<div className='flex items-center justify-between xl:justify-normal xl:gap-x-[151px]'>
				<div className='flex items-center'>
					{/* <UpdateImagePage /> */}
					<DeletePage />
				</div>
				<button
					onClick={remove}
					className='hidden h-[21px] w-[25px] xl:block'
				>
					<Image
						src='/images/close.svg'
						unoptimized
						width={25}
						height={21}
						alt='close'
						className='object-cover'
					/>
				</button>
			</div>
		</div>
	)
}

export default ActionsPage
