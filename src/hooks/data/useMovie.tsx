import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { Movie, MovieResult } from "../../types/Movies";
import { getUrl } from "../../utils/utils";

function useMovie(id: number) {
  return useQuery<Movie, number, Movie, ["movie", number]>(
    ["movie", id],
    () => fetcher(getUrl(`movie/${id}`)),
    {
      initialData: () => {
        const queryData = queryClient.getQueriesData<{
          results: Omit<MovieResult, "genre_ids">[];
        }>("movie");

        const movies = queryData
          .map(([key, data]) => data)
          .filter((data) => data !== undefined)
          .flatMap((data) => data.results);

        const movie = movies.find((data) => data.id === id);
        return movie as Movie;
      },
      staleTime: 0,
    }
  );
}

export default useMovie;
