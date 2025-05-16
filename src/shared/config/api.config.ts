import { SERVER_URL } from '../libs/constants/url.constants'

export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getFileUrl = (string: string) => `/files${string}`
export const getUserUrl = (string: string) => `/users${string}`
export const getAuthorUrl = (string: string) => `/authors${string}`
export const getPremiumUrl = (string: string) => `/premiums${string}`
export const getGenreUrl = (string: string) => `/genres${string}`
export const getMangaUrl = (string: string) => `/mangas${string}`
export const getChapterUrl = (string: string) => `/chapters${string}`
export const getPageUrl = (string: string) => `/pages${string}`
export const getReviewUrl = (string: string) => `/reviews${string}`
export const getPlanUrl = (string: string) => `/plans${string}`
