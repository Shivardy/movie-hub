import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { MediaType } from "../../types/common";
import { TrendingMovies } from "../../types/Movies";
import { TrendingPerson } from "../../types/Person";
import { TrendingTv } from "../../types/Tv";
import { queryKeys } from "../../utils/constants";
import { getUrl, updateCacheData } from "../../utils/utils";

export interface TrendingAll {
  page: number;
  results: TrendingAllResult;
  total_pages: number;
  total_results: number;
}

type TrendingAllResult =
  | TrendingPerson["results"]
  | TrendingMovies["results"]
  | TrendingTv["results"];

type TrendingType<T> = T extends "movie"
  ? TrendingMovies
  : T extends "tv"
  ? TrendingTv
  : T extends "person"
  ? TrendingPerson
  : T extends "all"
  ? TrendingAll
  : never;

function useTrending<T extends MediaType | "all">(type: T) {
  return useQuery<
    TrendingType<T>,
    string,
    TrendingType<T>["results"],
    [MediaType | "all", "trending"]
  >([type, "trending"], () => fetcher(getUrl(`trending/${type}/day`)), {
    select: (data) => data.results,
    onSuccess: (data) => {
      if (type === "movie") {
        queryClient.setQueryData(
          queryKeys.movies,
          updateCacheData(data as TrendingMovies["results"])
        );
      } else if (type === "tv") {
        queryClient.setQueryData(
          queryKeys.movies,
          updateCacheData(data as TrendingTv["results"])
        );
      } else if (type === "person") {
        queryClient.setQueryData(
          queryKeys.persons,
          updateCacheData(data as TrendingPerson["results"])
        );
      }
    },
  });
}

export default useTrending;
