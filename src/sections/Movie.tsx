import { RouteComponentProps, useParams } from "@reach/router";
import React from "react";
import useMovie from "../hooks/data/useMovie";

interface MovieProps extends RouteComponentProps {
  movieId?: string;
}

const Movie = (props: MovieProps) => {
  const { movieId } = useParams();
  const data = useMovie(movieId);
  console.log(data);
  return <h1>Movie</h1>;
};

export default Movie;
