export const QUERY_KEYS = {
	AUTH: 'auth',
	AUTHORS: 'authors',
	AUTHOR_BY_ID: 'authorById',

	GENRES: 'genres',
	GENRE_BY_ID: 'genreById',

	MANGA_BY_ID: 'mangaById',

	CHAPTERS_BY_MANGA_Id: 'chaptersByMangaId',
	CHAPTER_BY_ID: 'chapterById',

	POPULAR_MANGAS: 'popularMangas',
	NEW_MANGAS: 'newMangas',
	SEARCH_MANGAS: 'searchMangas',
	MANGAS_PUBLISH: 'mangasPublish',
	MANGAS: 'mangas',
	GET_SIMILAR_BY_AUTHOR: 'getSimilarByAuthor',

	REVIEWS_BY_MANGA: 'reviewsByManga',
	REVIEWS_BY_PARENT: 'reviewsByParent'
}

export type QUERY_KEYS = (typeof QUERY_KEYS)[keyof typeof QUERY_KEYS]
