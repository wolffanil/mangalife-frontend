'use client'

import { OnlyUser, WhiteWrapper } from '@/shared/components/elements'
import { useGetMangaById } from '@/shared/hooks/manga/useGetMangaById'
import type { IMangaById } from '@/shared/types/manga.interface'

import MangaChar from './ui/MangaChar'
import MangaInfo from './ui/MangaInfo'
import SimilarMangas from './ui/SimilarMangas'
import FormReview from './ui/review/FormReview'
import Reviews from './ui/review/Reviews'

interface MangaProps {
	initialManga: IMangaById
}

function Manga({ initialManga }: MangaProps) {
	const { manga, isLoadingManga } = useGetMangaById(initialManga)

	return (
		<WhiteWrapper withBack className='mt-[87px] xl:mt-[98px]'>
			{isLoadingManga ? null : (
				<>
					<MangaInfo manga={manga as IMangaById} />
					<MangaChar manga={manga as IMangaById} />
					<SimilarMangas />
					<OnlyUser>
						<FormReview />
					</OnlyUser>
					<Reviews />
				</>
			)}
		</WhiteWrapper>
	)
}

export default Manga
