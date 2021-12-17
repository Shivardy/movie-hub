import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { MovieType } from "../../types/common";
import { PopularMovies, UpcomingMovies } from "../../types/Movies";
import { queryKeys } from "../../utils/constants";
import { getUrl, updateCacheData } from "../../utils/utils";

type DiscoverMovieType<T> = T extends "upcoming"
  ? UpcomingMovies
  : T extends "popular"
  ? PopularMovies
  : never;

function useDiscoverMovies<T extends MovieType>(type: T) {
  return useQuery<
    DiscoverMovieType<T>,
    string,
    DiscoverMovieType<T>["results"],
    ["movie", MovieType]
  >(["movie", type], () => fetcher(getUrl(`movie/${type}`)), {
    select: (data) => data.results,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.movies, updateCacheData(data));
    },
  });
}

export default useDiscoverMovies;
