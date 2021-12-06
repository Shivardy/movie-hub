import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { Movie } from "../../types/Movies";
import { queryKeys } from "../../utils/constants";
import { getUrl } from "../../utils/utils";

function useMovie(id: number) {
  return useQuery<Movie, number, Movie, ["movie", number]>(
    ["movie", id],
    () =>
      fetcher(
        getUrl(
          `movie/${id}`,
          "&append_to_response=recommendations,videos,credits"
        )
      ),
    {
      initialData: () => {
        const queryData = queryClient.getQueryData<Movie[]>(queryKeys.movies);
        const movie = queryData?.find((data) => data.id === id);
        return movie;
      },
      staleTime: 0,
    }
  );
}

export default useMovie;
