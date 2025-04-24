'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { GOOGLE_RECAPTCHA_SITE_KEY } from '@/shared/libs/constants/url.constants'
import { TypeLoginSchema, loginSchema } from '@/shared/schemas/auth/login'

import { useLogin } from '../hooks/useLogin'

function LoginForm() {
	const router = useRouter()

	const [isShowPassword, setIsShowPassword] = useState(false)

	const { handleSubmit, control, reset, setError } = useForm<TypeLoginSchema>(
		{
			resolver: zodResolver(loginSchema),
			defaultValues: {
				email: ''
			}
		}
	)

	const {
		checkEmailMutation,
		isLoading: isPending,
		loginMutation
	} = useLogin({ reset, setError, setIsShowPassword })

	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const handleLogin = async (data: TypeLoginSchema) => {
		if (isShowPassword) {
			await loginMutation({ data, recaptcha: recaptchaValue ?? '' })
		} else {
			await checkEmailMutation({ data, recaptcha: recaptchaValue ?? '' })
		}
	}

	const isLoading = isPending

	return (
		<form
			className='flex w-full flex-col items-center'
			onSubmit={handleSubmit(handleLogin)}
		>
			<h2 className='text-center font-open_sans-regular text-[13px] xl:mt-[10px] xl:text-[21px]'>
				Выберите вход
			</h2>

			<div className='mt-[38px] grid w-full grid-cols-2 items-start justify-between gap-x-[35px] xl:mt-[60px] xl:gap-x-[70px]'>
				<button
					className='social__button'
					onClick={() =>
						router.replace(PUBLIC_URL.authSocial('/vkontakte'))
					}
					disabled={isLoading}
					type='button'
				>
					<div className='flex items-center gap-x-[9px] xl:gap-x-[15px]'>
						<Image
							src='/images/auth/vkontakte.svg'
							unoptimized
							alt='vk'
							width={15}
							height={16}
							className='block xl:size-[31px]'
						/>
						<p className='xl: font-open_sans-semibold text-[10px] font-semibold text-main-color xl:text-[15px]'>
							ВКонтакте
						</p>
					</div>
				</button>
				<button
					className='social__button'
					onClick={() =>
						router.replace(PUBLIC_URL.authSocial('/yandex'))
					}
					disabled={isLoading}
					type='button'
				>
					<div className='flex items-center gap-x-[9px] xl:gap-x-[15px]'>
						<Image
							src='/images/auth/yandex.svg'
							unoptimized
							alt='yandex'
							width={16}
							height={16}
							className='xl:size-[31px]'
						/>
						<p className='xl: font-open_sans-semibold text-[10px] font-semibold text-main-color xl:text-[15px]'>
							Яндекс
						</p>
					</div>
				</button>
			</div>

			<div className='relative w-full'>
				<p className='link__choice mt-[6px] text-center font-open_sans-regular text-[12px] text-main-color xl:text-[20px]'>
					Или
				</p>
			</div>

			<div className='mt-[25px] flex w-full flex-col items-center gap-y-[25px] xl:mt-[45px] xl:gap-y-[30px]'>
				<Field<TypeLoginSchema>
					control={control}
					name='email'
					placeholder='Почта'
					disabled={isLoading}
				/>
				{isShowPassword ? (
					<Field<TypeLoginSchema>
						control={control}
						name='password'
						placeholder='Пароль'
						type='password'
						disabled={isLoading}
					/>
				) : null}
			</div>

			<div className='mt-[15px] flex max-w-[300px] justify-center'>
				<ReCAPTCHA
					sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
					onChange={setRecaptchaValue}
				/>
			</div>
			<Button
				className='mt-[25px] h-[56px] w-[176px] xl:mt-[44px] xl:h-[68px] xl:w-[258px]'
				type='submit'
				disabled={isLoading || !recaptchaValue}
			>
				Войти
			</Button>
			<Link
				href={PUBLIC_URL.register()}
				className='mt-[15px] border-b border-[#313131] font-open_sans-semibold text-[11px] text-[#313131] xl:mt-[20px] xl:text-[12px]'
			>
				<p>Ещё не зарегистрировались?</p>
			</Link>
		</form>
	)
}

export default LoginForm
