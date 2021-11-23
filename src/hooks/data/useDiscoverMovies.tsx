import { useQuery } from "react-query";
import { fetcher } from "../../services/api";
import { Media, MovieType } from "../../types/common";
import { PopularMovies, UpcomingMovies } from "../../types/Movies";
import { getMoviesFromApiResult, getUrl } from "../../utils/utils";

function useDiscoverMovies(type: MovieType) {
  return useQuery<
    UpcomingMovies | PopularMovies,
    string,
    Media[],
    ["movie", MovieType]
  >(["movie", type], () => fetcher(getUrl(`movie/${type}`)), {
    select: (data) => {
      return type === MovieType.Upcoming
        ? getMoviesFromApiResult((data as UpcomingMovies).results)
        : getMoviesFromApiResult((data as PopularMovies).results);
    },
  });
}

export default useDiscoverMovies;
