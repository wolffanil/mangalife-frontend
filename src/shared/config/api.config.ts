import { SERVER_URL } from '../libs/constants/url.constants'

export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getFileUrl = (string: string) => `/files${string}`
export const getUserUrl = (string: string) => `/users${string}`
export const getAuthorUrl = (string: string) => `/authors${string}`
export const getPremiumUrl = (string: string) => `/premiums${string}`
export const getGenreUrl = (string: string) => `/genres${string}`
