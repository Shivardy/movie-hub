import { RouteComponentProps, useParams } from "@reach/router";
import React from "react";
import styled from "styled-components";
import useMovie from "../hooks/data/useMovie";
import { ImageRatio } from "../types/common";
import {
  getImageHeightAndWidth,
  getImageSrc,
  getReleaseDate,
} from "../utils/utils";

const MovieContainer = styled.div`
  background-image: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface4}
  );
`;

type ImageProps = {
  aspectRatio: ImageRatio;
  inlineSize: string;
  blockSize: string;
};
const Image = styled.img<ImageProps>`
  inline-size: ${(props) => props.inlineSize};
  block-size: ${(props) => props.blockSize};

  aspect-ratio: ${(props) => props.aspectRatio};

  object-fit: cover;

  border-radius: 1ex;
  border: none;
  overflow: hidden;
  background-image: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.surface1}, ${props.theme.colors.surface2})`};
`;

const Figcaption = styled.figcaption`
  line-height: ${(props) => props.theme.size.lg};
  font-weight: 600;
  font-size: ${(props) => props.theme.size.md};
`;

interface MovieProps extends RouteComponentProps {
  movieId?: string;
}

const Movie = (props: MovieProps) => {
  const { movieId } = useParams();
  const { data } = useMovie(parseInt(movieId));
  console.log(data);
  const imageSrc = getImageSrc(data?.poster_path, "poster");
  const [height, width] = getImageHeightAndWidth("2/3", 15);

  return (
    <MovieContainer>
      <div>
        <figure>
          <picture>
            <Image
              aspectRatio="2/3"
              inlineSize={width}
              blockSize={height}
              alt={data?.title}
              loading="lazy"
              srcSet={imageSrc.srcset}
              src={imageSrc.src}
            />
          </picture>
          <Figcaption>
            {getReleaseDate(data?.release_date || Date.now().toString())}
          </Figcaption>
        </figure>
      </div>
    </MovieContainer>
  );
};

export default Movie;
