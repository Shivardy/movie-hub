import { RouteComponentProps, useParams } from "@reach/router";
import React from "react";
import styled from "styled-components";
import useMovie from "../hooks/data/useMovie";
import { ImageRatio } from "../types/common";
import {
  getBackgroundImageSrc,
  getImageHeightAndWidth,
  getImageSrc,
  getReleaseDate,
} from "../utils/utils";

const MovieContainer = styled.div`
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface4}
  );
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.size.lg};
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

const BgImageContainer = styled.div<{
  height: string;
  width: string;
  img: string;
}>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: relative;

  &::before {
    content: "";
    background-image: url(${(props) => props.img});
    border-radius: 1ex;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }
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
  const bgImageSrc = getBackgroundImageSrc(data?.backdrop_path || "");
  const [bgHeight, bgWidth] = getImageHeightAndWidth("16/9", 22.5);

  return (
    <MovieContainer>
      <ImageContainer>
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
        {/* <Image
          aspectRatio="16/9"
          inlineSize={bgWidth}
          blockSize={bgHeight}
          alt={data?.title}
          loading="lazy"
          srcSet={bgImageSrc.srcset}
          src={bgImageSrc.src}
        /> */}
        <BgImageContainer height={bgHeight} width={bgWidth} img={bgImageSrc}>
          {data?.title}
        </BgImageContainer>
      </ImageContainer>
    </MovieContainer>
  );
};

export default Movie;
