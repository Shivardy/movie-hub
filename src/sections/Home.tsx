import { RouteComponentProps } from "@reach/router";
import ContentByGenres from "./ContentByGenres";
import DiscoverMovies from "./DiscoverMovies";
import Trending from "./Trending";

const Home = (props: RouteComponentProps) => (
  <>
    <Trending />
    <DiscoverMovies />
    <ContentByGenres />
  </>
);

export default Home;
