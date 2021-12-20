export interface SearchResult {
  page: number;
  results: SearchData[];
  total_pages: number;
  total_results: number;
}
type SearchData = Person | Movie | Tv;

interface Person {
  id: number;
  media_type: "person";
  name: string;
  profile_path?: string;
}
interface Movie {
  id: number;
  media_type: "movie";
  backdrop_path?: string;
  poster_path?: string;
  title: string;
}
interface Tv {
  id: number;
  media_type: "tv";
  name: string;
  poster_path?: string;
  backdrop_path?: string;
}
