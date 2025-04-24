import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				yellow: 'var(--color-yellow)',
				dark: 'var(--color-dark)',
				green: 'var(--color-green)',
				'auth-text-color': 'var(--auth-text-color)',
				'main-color': 'var(--main-text-color)'
			},
			fontFamily: {
				'open_sans-regular': 'var(--font-open_sans-regular)',
				'open_sans-semibold': 'var(--font-open_sans-semibold)',
				'open_sans-bold': 'var(--font-open_sans-bold)',
				'antelive-bold': 'var(--font-antelive-bold)',
				'inter-regular': 'var(--font-inter-regular)',
				'inter-bold': 'var(--font-inter-bold)'
			}
		}
	},
	plugins: []
} satisfies Config
