import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { Media, MediaType } from "../../types/common";
import { GenreMovies } from "../../types/Movies";
import { GenreTv } from "../../types/Tv";
import { queryKeys } from "../../utils/constants";
import {
  getTVsFromApiResult,
  getUrl,
  updateCacheData,
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
          ? (data as GenreMovies).results
          : getTVsFromApiResult((data as GenreTv).results);
      },
      onSuccess: (data) => {
        queryClient.setQueryData(
          type === MediaType.Movie ? queryKeys.movies : queryKeys.tvs,
          updateCacheData(data)
        );
      },
      enabled,
    }
  );
}

export default useContentByGenre;
