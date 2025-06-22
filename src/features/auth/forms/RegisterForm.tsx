'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Button, Field } from '@/shared/components/elements'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { GOOGLE_RECAPTCHA_SITE_KEY } from '@/shared/libs/constants/url.constants'
import {
	type TypeRegisterSchema,
	registerSchema
} from '@/shared/schemas/auth/register'

import { useRegister } from '../hooks/useRegister'

function RegisterForm() {
	const { handleSubmit, control, reset, setError } =
		useForm<TypeRegisterSchema>({
			resolver: zodResolver(registerSchema),
			defaultValues: {
				nickname: '',
				email: '',
				password: ''
			}
		})

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const { registerMutation, isLoadingRegister } = useRegister(reset, setError)

	const handleRegister = async (data: TypeRegisterSchema) => {
		if (!recaptchaValue) return

		try {
			await registerMutation({ data, recaptcha: recaptchaValue })
		} catch (error) {
		} finally {
			recaptchaRef?.current?.reset()
			setRecaptchaValue(null)
		}
	}

	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const isLoading = isLoadingRegister

	return (
		<form
			className='flex w-full flex-col items-center'
			onSubmit={handleSubmit(handleRegister)}
		>
			<h2 className='text-center font-open_sans-regular text-[13px] xl:mt-[10px] xl:text-[21px]'>
				Заполните поля для регистрации
			</h2>
			<div className='mt-[45px] flex w-full flex-col items-center gap-y-[25px] xl:mt-[59px] xl:gap-y-[30px]'>
				<Field<TypeRegisterSchema>
					control={control}
					name='nickname'
					placeholder='Имя'
					disabled={isLoading}
				/>
				<Field<TypeRegisterSchema>
					control={control}
					name='email'
					placeholder='Почта'
					disabled={isLoading}
				/>
				<Field<TypeRegisterSchema>
					control={control}
					name='password'
					placeholder='Пароль'
					type='password'
					disabled={isLoading}
				/>
			</div>

			<div className='mr-auto mt-[29px] flex items-start gap-x-[15px] xl:mt-[35px]'>
				<input
					type='checkbox'
					className='bg-yellow xl:size-[14px]'
					required
					disabled={isLoading}
				/>
				<p className='hover:cursor-pointer'>
					<Link href={PUBLIC_URL.userAgreement()}>
						Я подтверждаю своё согласие на обработку{' '}
						<br className='hidden xl:block' /> персональных данных
					</Link>
				</p>
			</div>
			<div className='mt-[15px] flex max-w-[300px] justify-center'>
				<ReCAPTCHA
					sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
					onChange={setRecaptchaValue}
					ref={recaptchaRef}
				/>
			</div>
			<Button
				className='mt-[25px] h-[56px] w-[176px] xl:mt-[44px] xl:h-[68px] xl:w-[258px]'
				type='submit'
				disabled={isLoading || !recaptchaValue}
			>
				Зарегистрироваться
			</Button>
			<Link
				href={PUBLIC_URL.login()}
				className='mt-[15px] border-b border-[#313131] font-open_sans-semibold text-[11px] text-[#313131] xl:mt-[20px] xl:text-[12px]'
			>
				<p>Уже есть аккаунт?</p>
			</Link>
		</form>
	)
}

export default RegisterForm
