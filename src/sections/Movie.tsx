import { RouteComponentProps, useParams } from "@reach/router";
import styled from "styled-components";
import MediaListItem from "../components/MediaListItem";
import MediaScroller from "../components/MediaScroller";
import { Header } from "../components/StyledElements";
import useMovie from "../hooks/data/useMovie";
import { ImageRatio, MediaType } from "../types/common";
import {
  getBackgroundImageSrc,
  getImageHeightAndWidth,
  getImageSrc,
  getReleaseDate,
  minuteToTime,
} from "../utils/utils";

const MovieContainer = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface4}
  );
`;

const ImageContainer = styled.div<{
  img?: string;
}>`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.xxl};
  padding-inline: calc(${(props) => props.theme.size.xxl} * 4);
  background-image: linear-gradient(
      to right,
      ${(props) => props.theme.getColorWithOpacity("surface1", 0.95)},
      ${(props) => props.theme.getColorWithOpacity("surface2", 0.9)}
    ),
    url(${(props) => props.img});

  background-size: cover;
  background-position: center;
  border-radius: 1ex;

  @media ${({ theme }) => theme.mediaQueries.below768} {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding-inline: ${(props) => props.theme.size.xxl};
  }
`;

const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.size.xl};

  .movieHeading > h1 {
    font-size: ${(props) => props.theme.size.xxl};
    line-height: ${(props) => props.theme.size.xxl};

    font-weight: 600;
    & > span {
      font-weight: 400;
    }
  }
  .movieFacts {
    display: flex;
    line-height: ${(props) => props.theme.size.xxl};

    gap: ${(props) => props.theme.size.xxl};
    & > span {
      white-space: nowrap;
    }
  }
  .movieGenres {
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.size.sm};
  }
`;

const Figure = styled.figure`
  background-color: ${(props) => props.theme.colors.surface2};
  border-radius: 1ex;
  height: 100%;

  & > figcaption {
    line-height: ${(props) => props.theme.size.lg};
    padding: ${(props) => props.theme.size.xs};
    text-align: center;
    padding-top: 0;
    width: 100%;
    font-weight: 600;
    font-size: ${(props) => props.theme.size.md};
  }
`;
const Actors = styled.section`
  background-image: ${(props) =>
    `linear-gradient(
    135deg,
    ${props.theme.colors.surface2},
    ${props.theme.colors.surface4}
  )`};
`;

const Recommendations = styled.section<{ gridItemSize: string }>`
  .recommendationsGrid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(${(props) => props.gridItemSize}, 1fr)
    );
    gap: ${(props) => props.theme.size.xl};

    padding-inline: ${(props) => props.theme.size.lg};
    padding-block: ${(props) => props.theme.size.xs};

    & > div {
      justify-self: center;
    }
  }
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

  border-top-right-radius: 1ex;
  border-top-left-radius: 1ex;

  border: none;
  overflow: hidden;
  background-image: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.surface1}, ${props.theme.colors.surface2})`};
`;

interface MovieProps extends RouteComponentProps {
  movieId?: string;
}

const Movie = (props: MovieProps) => {
  const { movieId } = useParams();
  const { data, isLoading } = useMovie(parseInt(movieId));
  console.log(data);
  const imageSrc = getImageSrc(data?.poster_path, "poster");
  const [height, width] = getImageHeightAndWidth("2/3", 20);
  const bgImageSrc = data?.backdrop_path
    ? getBackgroundImageSrc(data?.backdrop_path)
    : undefined;

  const actors = data?.credits?.cast || [];
  const recommendations = data?.recommendations?.results || [];
  const actorsList = actors.map(({ id, name, character, profile_path }) => ({
    id,
    title: name,
    image: getImageSrc(profile_path, "profile"),
    caption: character,
  }));
  const recommendationsList = recommendations
    .slice(0, 12)
    .map(({ id, title, backdrop_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(backdrop_path, "backdrop"),
      caption: getReleaseDate(release_date),
    }));
  const [_, recommendationGridItemWidth] = getImageHeightAndWidth("16/9", 7);

  return (
    <>
      <MovieContainer>
        <ImageContainer img={bgImageSrc}>
          <Figure>
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
            <figcaption>
              {getReleaseDate(data?.release_date || Date.now().toString())}
            </figcaption>
          </Figure>
          <MovieDescription>
            <div className="movieHeading">
              <h1>
                {data?.title}
                <span>
                  {`(${new Date(
                    data?.release_date || Date.now()
                  ).getFullYear()})`}
                </span>
              </h1>
              <div className="movieFacts">
                <span>
                  {getReleaseDate(data?.release_date || Date.now().toString())}
                </span>
                {data?.runtime ? (
                  <span>{minuteToTime(data?.runtime)}</span>
                ) : null}
              </div>
            </div>
            {data?.tagline ? <h4>{data.tagline}</h4> : null}

            <div className="movieGenres">
              {data?.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
            <div>
              <h3>Status</h3>
              <p>{data?.status}</p>
            </div>
            <div>
              <h3>Overview</h3>
              <p>{data?.overview}</p>
            </div>
          </MovieDescription>
        </ImageContainer>
      </MovieContainer>
      <Actors id="actors">
        <Header>
          <h1>Actors</h1>
        </Header>
        <MediaScroller
          list={actorsList}
          ratio="2/3"
          loading={isLoading}
          mediaType={MediaType.Person}
        />
      </Actors>

      {recommendationsList.length ? (
        <Recommendations
          id="recommendations"
          gridItemSize={recommendationGridItemWidth}
        >
          <Header>
            <h1>Recommendations</h1>
          </Header>

          <div className="recommendationsGrid">
            {recommendationsList.map((item, index) => (
              <MediaListItem
                key={item.id || index}
                item={item}
                ratio="16/9"
                mediaType={MediaType.Movie}
                size={7}
              />
            ))}
          </div>
        </Recommendations>
      ) : null}
    </>
  );
};

export default Movie;
