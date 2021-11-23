import { useQuery } from "react-query";
import { fetcher } from "../../services/api";
import { Media, MediaType } from "../../types/common";
import { TrendingMovies } from "../../types/Movies";
import { TrendingTv } from "../../types/Tv";
import {
  getMoviesFromApiResult,
  getTVsFromApiResult,
  getUrl,
} from "../../utils/utils";

function useTrending(type: MediaType) {
  return useQuery<
    TrendingMovies | TrendingTv,
    string,
    Media[],
    [MediaType, "trending"]
  >([type, "trending"], () => fetcher(getUrl(`trending/${type}/day`)), {
    select: (data) => {
      return type === MediaType.Movie
        ? getMoviesFromApiResult((data as TrendingMovies).results)
        : getTVsFromApiResult((data as TrendingTv).results);
    },
  });
}

export default useTrending;
