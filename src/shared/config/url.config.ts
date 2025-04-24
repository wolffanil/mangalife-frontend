import { API_URL, getAuthUrl } from './api.config'

export const PUBLIC_URL = {
	root: (url = '') => `${url}`,

	main: () => PUBLIC_URL.root('/'),

	catalog: () => PUBLIC_URL.root('/catalog'),

	register: () => PUBLIC_URL.root('/register'),

	login: () => PUBLIC_URL.root('/login'),

	aboutUs: () => PUBLIC_URL.root('/about-us'),

	subscribe: () => PUBLIC_URL.root('/subscribe'),

	userAgreement: () => PUBLIC_URL.root('/user-agreement'),

	subscribeAgreement: () => PUBLIC_URL.root('/subscribe-agreement'),

	confAgreement: () => PUBLIC_URL.root('/conf-agreement'),

	politicts: () => PUBLIC_URL.root('/politicts'),

	subscribeRules: () => PUBLIC_URL.root('/subscribe-rules'),

	contact: () => PUBLIC_URL.root('/contact'),

	authSocial: (social: string) => API_URL + getAuthUrl(`${social}`)
}

export const USER_URL = {
	root: (url = '') => `${url}`,

	favorites: () => USER_URL.root('/profile?list=favorites'),

	profile: () => USER_URL.root('/profile'),

	editProfile: () => USER_URL.root('/edit-profile'),

	manageGenres: () => USER_URL.root('/manage-genres')
}
