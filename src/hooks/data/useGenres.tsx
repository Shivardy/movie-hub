import { useQuery } from 'react-query';
import { multiFetcher } from '../../services/api';
import { Genres } from '../../types/common';
import { getUrl } from '../../utils/utils';

function useGenres() {
  return useQuery<
    { genres: Genres }[],
    string,
    { tvGenres: Genres; movieGenres: Genres },
    'genres'
  >(
    'genres',
    () => multiFetcher(getUrl('genre/tv/list'), getUrl('genre/movie/list')),
    {
      select: (data) => {
        const [tv, movie] = data;
        return { tvGenres: tv.genres, movieGenres: movie.genres };
      },
    }
  );
}

export default useGenres;
