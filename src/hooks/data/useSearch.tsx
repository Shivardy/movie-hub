import { useQuery } from "react-query";
import { fetcher } from "../../services/api";
import { SearchResult } from "../../types/Search";
import { getUrl } from "../../utils/utils";

const useSearch = (query: string) =>
  useQuery<SearchResult, number, SearchResult["results"], ["search", string]>(
    ["search", query],
    () => fetcher(getUrl("search/multi", `&query=${query}`)),
    { enabled: !!query, select: (data) => data.results }
  );

export default useSearch;
