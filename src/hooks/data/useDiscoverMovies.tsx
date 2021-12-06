import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { Media, MovieType } from "../../types/common";
import { PopularMovies, UpcomingMovies } from "../../types/Movies";
import { queryKeys } from "../../utils/constants";
import { getUrl, updateCacheData } from "../../utils/utils";

function useDiscoverMovies(type: MovieType) {
  return useQuery<
    UpcomingMovies | PopularMovies,
    string,
    Media[],
    ["movie", MovieType]
  >(["movie", type], () => fetcher(getUrl(`movie/${type}`)), {
    select: (data) => {
      return type === MovieType.Upcoming
        ? (data as UpcomingMovies).results
        : (data as PopularMovies).results;
    },
    onSuccess: (data) => {
      queryClient.setQueryData<Media[]>(
        queryKeys.movies,
        updateCacheData(data)
      );
    },
  });
}

export default useDiscoverMovies;
