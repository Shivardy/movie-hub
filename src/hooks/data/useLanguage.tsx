import { useQuery } from "react-query";
import { fetcher } from "../../services/api";
import { getUrl } from "../../utils/utils";

interface Language {
  iso_639_1: string;
  english_name: string;
  name: string;
}
const useLanguage = () =>
  useQuery<Language[], number, Language[], "languages">("languages", () =>
    fetcher(getUrl("configuration/languages"))
  );

export default useLanguage;
