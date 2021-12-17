import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { Media, MediaType } from "../../types/common";
import { TrendingMovies } from "../../types/Movies";
import { TrendingTv } from "../../types/Tv";
import { queryKeys } from "../../utils/constants";
import {
  getTVsFromApiResult,
  getUrl,
  updateCacheData,
} from "../../utils/utils";

function useTrending(type: MediaType) {
  return useQuery<
    TrendingMovies | TrendingTv,
    string,
    Media[],
    [MediaType, "trending"]
  >([type, "trending"], () => fetcher(getUrl(`trending/${type}/day`)), {
    select: (data) => {
      return type === "movie"
        ? (data as TrendingMovies).results
        : getTVsFromApiResult((data as TrendingTv).results);
    },
    onSuccess: (data) => {
      queryClient.setQueryData<Media[]>(
        type === "movie" ? queryKeys.movies : queryKeys.tvs,
        updateCacheData(data)
      );
    },
  });
}

export default useTrending;
