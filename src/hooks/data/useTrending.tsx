import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { MediaTypeExcludePerson } from "../../types/common";
import { MovieResult, TrendingMovies } from "../../types/Movies";
import { TrendingTv, TVResult } from "../../types/Tv";
import { queryKeys } from "../../utils/constants";
import { getUrl, updateCacheData } from "../../utils/utils";

type TrendingType<T> = T extends "movie"
  ? TrendingMovies
  : T extends "tv"
  ? TrendingTv
  : never;

function useTrending<T extends MediaTypeExcludePerson>(type: T) {
  return useQuery<
    TrendingType<T>,
    string,
    TrendingType<T>["results"],
    [MediaTypeExcludePerson, "trending"]
  >([type, "trending"], () => fetcher(getUrl(`trending/${type}/day`)), {
    select: (data) => data.results,
    onSuccess: (data) => {
      if (type === "movie") {
        queryClient.setQueryData(
          queryKeys.movies,
          updateCacheData(data as MovieResult[])
        );
      } else if (type === "tv") {
        queryClient.setQueryData(
          queryKeys.movies,
          updateCacheData(data as TVResult[])
        );
      }
    },
  });
}

export default useTrending;
