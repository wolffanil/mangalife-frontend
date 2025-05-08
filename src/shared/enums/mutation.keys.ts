export const MUTATION_KEYS = {
	REGISTER: 'register',
	LOGIN: 'login',
	EMAIL_CHECK: 'emailCheck',
	LOGOUT: 'logout',
	EDIT_PROFILE: 'editProfile',

	CREATE_AUTHOR: 'createAuthor',
	UPDATE_AUTHOR: 'updateAuthor',
	DELETE_AUTHOR: 'deleteAuthor',

	CREATE_GENRE: 'createGenre',
	UPDATE_GENRE: 'updateGenre',
	DELETE_GENRE: 'deleteGenre',

	PREMIUM_CHECKOUT: 'premiumCheckout',

	CREATE_MANGA: 'createManga',
	UPDATE_MANGA: 'updateManga',

	CREATE_CHAPTER: 'createChapter',
	UPDATE_CHAPTER: 'updateChapter',
	DELETE_CHAPTER: 'deleteChapter',

	CREATE_PAGE: 'createPage',
	UPDATE_IMAGE_PAGE: 'updateImagePage',
	UPDATE_NUMBER_PAGE: 'updateNumberPage',
	DELETE_PAGE: 'deletePage'
}

export type MUTATION_KEYS = (typeof MUTATION_KEYS)[keyof typeof MUTATION_KEYS]
