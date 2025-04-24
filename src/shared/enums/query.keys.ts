export const QUERY_KEYS = {
	AUTH: 'auth',
	AUTHORS: 'authors',
	AUTHOR_BY_ID: 'authorById',

	GENRES: 'genres',
	GENRE_BY_ID: 'genreById'
}

export type QUERY_KEYS = (typeof QUERY_KEYS)[keyof typeof QUERY_KEYS]
