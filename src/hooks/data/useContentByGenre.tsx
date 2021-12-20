import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { MediaTypeExcludePerson } from "../../types/common";
import { GenreMovies } from "../../types/Movies";
import { GenreTv } from "../../types/Tv";
import { queryKeys } from "../../utils/constants";
import { getUrl, updateCacheData } from "../../utils/utils";

type ContentByGenreType<T> = T extends "movie"
  ? GenreMovies
  : T extends "tv"
  ? GenreTv
  : never;

function useContentByGenre<T extends MediaTypeExcludePerson>(
  type: T,
  genreId: number,
  enabled = false
) {
  return useQuery<
    ContentByGenreType<T>,
    string,
    ContentByGenreType<T>["results"],
    [MediaTypeExcludePerson, "genre", number]
  >(
    [type, "genre", genreId],
    () => fetcher(getUrl(`discover/${type}`, `&with_genres=${genreId}`)),
    {
      select: (data) => data.results,
      onSuccess: (data) => {
        if (type === "movie") {
          queryClient.setQueryData(
            queryKeys.movies,
            updateCacheData(data as GenreMovies["results"])
          );
        } else if (type === "tv") {
          queryClient.setQueryData(
            queryKeys.movies,
            updateCacheData(data as GenreTv["results"])
          );
        }
      },
      enabled,
    }
  );
}

export default useContentByGenre;
