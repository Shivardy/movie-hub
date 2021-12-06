import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { Tv } from "../../types/Tv";
import { queryKeys } from "../../utils/constants";
import { getUrl } from "../../utils/utils";

function useTv(id: number) {
  return useQuery<Tv, number, Tv, ["tv", number]>(
    ["tv", id],
    () =>
      fetcher(
        getUrl(`tv/${id}`, "&append_to_response=recommendations,videos,credits")
      ),
    {
      initialData: () => {
        const queryData = queryClient.getQueryData<Tv[]>(queryKeys.tvs);
        const tv = queryData?.find((data) => data.id === id);
        return tv;
      },
      staleTime: 0,
    }
  );
}

export default useTv;
