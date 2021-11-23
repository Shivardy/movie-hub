import { useQuery } from "react-query";
import { fetcher } from "../../services/api";
import { Media, MediaType } from "../../types/common";
import { GenreMovies } from "../../types/Movies";
import { GenreTv } from "../../types/Tv";
import {
  getMoviesFromApiResult,
  getTVsFromApiResult,
  getUrl,
} from "../../utils/utils";

function useContentByGenre(type: MediaType, genreId: number, enabled = false) {
  return useQuery<
    GenreMovies | GenreTv,
    string,
    Media[],
    [MediaType, "genre", number]
  >(
    [type, "genre", genreId],
    () => fetcher(getUrl(`discover/${type}`, `&with_genres=${genreId}`)),
    {
      select: (data) => {
        return type === MediaType.Movie
          ? getMoviesFromApiResult((data as GenreMovies).results)
          : getTVsFromApiResult((data as GenreTv).results);
      },
      enabled,
    }
  );
}

export default useContentByGenre;
