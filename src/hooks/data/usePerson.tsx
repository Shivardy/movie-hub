import { useQuery } from "react-query";
import { queryClient } from "../../App";
import { fetcher } from "../../services/api";
import { Person } from "../../types/Person";
import { queryKeys } from "../../utils/constants";
import { getUrl } from "../../utils/utils";

function usePerson(id: number) {
  return useQuery<Person, number, Person, ["person", number]>(
    ["person", id],
    () =>
      fetcher(
        getUrl(
          `person/${id}`,
          "&append_to_response=combined_credits,external_ids"
        )
      ),
    {
      initialData: () => {
        const queryData = queryClient.getQueryData<Person[]>(queryKeys.persons);
        const person = queryData?.find((data) => data.id === id);
        return person;
      },
      staleTime: 0,
    }
  );
}

export default usePerson;
