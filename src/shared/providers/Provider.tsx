import { NuqsAdapter } from 'nuqs/adapters/next'
import { PropsWithChildren } from 'react'
import { ToastContainer, Zoom } from 'react-toastify'

import ProgressProvider from './ProgressProvider'
import ReactQueryProvider from './ReactQueryProvider'

interface ProviderProps extends PropsWithChildren {}

function Provider({ children }: ProviderProps) {
	return (
		<ReactQueryProvider>
			<NuqsAdapter>
				<ProgressProvider>{children}</ProgressProvider>
			</NuqsAdapter>
			<ToastContainer
				position='top-center'
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition={Zoom}
				toastStyle={{
					backgroundColor: 'var(--color-yellow)'
				}}
				className='max-sm:w-full'
			/>
		</ReactQueryProvider>
	)
}

export default Provider
