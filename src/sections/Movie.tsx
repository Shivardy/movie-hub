import { RouteComponentProps, useParams } from "@reach/router";
import MediaListItem from "../components/MediaListItem";
import MediaScroller from "../components/MediaScroller";
import ReadMore from "../components/ReadMore";
import {
  Figure,
  Header,
  Image,
  ImageContainer,
  MediaDescription,
  MediaGridSection,
  MediaScreenContainer,
  SectionWithBGColor,
} from "../components/StyledElements";
import useMovie from "../hooks/data/useMovie";
import { MediaType } from "../types/common";
import {
  getBackgroundImageSrc,
  getImageHeightAndWidth,
  getImageSrc,
  getReleaseDate,
  minuteToTime,
} from "../utils/utils";

interface MovieProps extends RouteComponentProps {
  movieId?: string;
}

const Movie = (props: MovieProps) => {
  const { movieId } = useParams();
  const { data, isFetching } = useMovie(parseInt(movieId));
  const imageSrc = getImageSrc(data?.poster_path, "poster");
  const [height, width] = getImageHeightAndWidth("2/3", 20);
  const bgImageSrc = data?.backdrop_path
    ? getBackgroundImageSrc(data?.backdrop_path)
    : undefined;

  const actors = data?.credits?.cast || [];
  const recommendations = data?.recommendations?.results || [];
  const actorsList = actors
    .filter(({ profile_path }) => profile_path)
    .map(({ id, name, character, profile_path }) => ({
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
  const [, recommendationGridItemWidth] = getImageHeightAndWidth("16/9", 7);

  return (
    <>
      <MediaScreenContainer>
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
          <MediaDescription>
            <div className="mediaHeading">
              <h1>
                {data?.title}
                <span>
                  {`(${new Date(
                    data?.release_date || Date.now()
                  ).getFullYear()})`}
                </span>
              </h1>
              <div className="mediaFacts">
                <span>
                  {getReleaseDate(data?.release_date || Date.now().toString())}
                </span>
                {data?.runtime ? (
                  <span>{minuteToTime(data?.runtime)}</span>
                ) : null}
              </div>
            </div>
            {data?.tagline ? <h4>{data.tagline}</h4> : null}

            <div className="mediaGenres">
              {data?.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
            <div>
              <h3>Status</h3>
              <p>{data?.status}</p>
            </div>

            {data?.overview ? (
              <div>
                <h3>Overview</h3>
                <ReadMore text={data?.overview} />
              </div>
            ) : null}
          </MediaDescription>
        </ImageContainer>
      </MediaScreenContainer>
      <SectionWithBGColor id="actors">
        <Header>
          <h1>Actors</h1>
        </Header>
        <MediaScroller
          list={actorsList}
          ratio="2/3"
          loading={isFetching}
          mediaType={MediaType.Person}
        />
      </SectionWithBGColor>

      {recommendationsList.length ? (
        <MediaGridSection
          id="recommendations"
          gridItemSize={recommendationGridItemWidth}
        >
          <Header>
            <h1>Recommendations</h1>
          </Header>

          <div className="mediaGrid">
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
        </MediaGridSection>
      ) : null}
    </>
  );
};

export default Movie;
