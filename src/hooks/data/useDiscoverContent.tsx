// https://api.themoviedb.org/3/discover/movie?api_key=f274625ee8526fcb3150182ed7668864&sort_by=primary_release_date.desc&with_original_language=te&primary_release_date.lte=2021-12-22&primary_release_date.gte=2020-12-22
import { useInfiniteQuery } from "react-query";
import { fetcher } from "../../services/api";
import { MediaTypeExcludePerson, StatusType } from "../../types/common";
import { DiscoverMovies } from "../../types/Movies";
import { DiscoverTv } from "../../types/Tv";
import { getUrl } from "../../utils/utils";

type DiscoverContent<T> = T extends "movie"
  ? DiscoverMovies
  : T extends "tv"
  ? DiscoverTv
  : never;

function useDiscoverContent<T extends MediaTypeExcludePerson>(
  type: T,
  status: "latest" | "upcoming",
  language: string,
  genre: number | undefined
) {
  return useInfiniteQuery<
    DiscoverContent<T>,
    string,
    DiscoverContent<T>,
    ["discover", MediaTypeExcludePerson, StatusType, string, number | undefined]
  >(
    ["discover", type, status, language, genre],
    ({ pageParam = 1 }) => {
      const genreQuery = genre ? `&with_genres=${genre}` : "";
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const mon = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      const year = date.getFullYear();

      const today = [year, mon, day].join("-");
      const todayPlusYear = [year + 3, mon, day].join("-");
      const todayMinusYear = [year - 3, mon, day].join("-");

      const timeQuery = `&primary_release_date.lte=${
        status === "latest" ? today : todayPlusYear
      }&primary_release_date.gte=${
        status === "latest" ? todayMinusYear : today
      }&sort_by=primary_release_date.${status === "latest" ? "desc" : "asc"}`;

      return fetcher(
        getUrl(
          `discover/${type}`,
          `&page=${pageParam}&with_original_language=${language}${genreQuery}${timeQuery}`
        )
      );
    },
    {
      getNextPageParam: (lastPageData) => {
        if (lastPageData.total_pages === 0) return undefined;
        return lastPageData.total_pages === lastPageData.page
          ? undefined
          : lastPageData.page + 1;
      },
    }
  );
}

export default useDiscoverContent;
