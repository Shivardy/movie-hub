import { useQuery } from "react-query";
import { fetcher } from "../../services/api";
import { Movie } from "../../types/Movies";
import { getUrl } from "../../utils/utils";

function useMovie(id: number) {
  return useQuery<Movie, number, Movie, ["movie", number]>(
    ["movie", id],
    () => fetcher(getUrl(`movie/${id}`)),
    {
      // initialData: () => {
      //   const temp =
      //     queryClient.getQueriesData<{ results: MovieResult[] }>("movie");
      //   console.log(temp);
      //   return {} as any as MovieResult;
      //   // return temp.results?.find((d: any) => d.id == id);
      // },
      // staleTime: 0,
    }
  );
}

export default useMovie;
