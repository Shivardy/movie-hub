import { MediaType } from "./common";

export interface SearchResult {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
type Result = Person | Movie | Tv;

interface Person {
  id: number;
  media_type: MediaType.Person;
  name: string;
  profile_path?: string;
}
interface Movie {
  id: number;
  media_type: MediaType.Movie;
  backdrop_path?: string;
  poster_path?: string;
  title: string;
}
interface Tv {
  id: number;
  media_type: MediaType.Tv;
  name: string;
  poster_path?: string;
  backdrop_path?: string;
}
