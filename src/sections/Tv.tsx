import { RouteComponentProps, useParams } from "@reach/router";
import { useCallback, useState } from "react";
import MediaListItem from "../components/MediaListItem";
import MediaScroller from "../components/MediaScroller";
import Modal from "../components/Modal";
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
  TrailerButton,
} from "../components/StyledElements";
import YoutubeTrailer from "../components/YoutubeTrailer";
import useTv from "../hooks/data/useTv";
import Youtube from "../icons/Youtube";
import {
  getBackgroundImageSrc,
  getImageHeightAndWidth,
  getImageSrc,
  getReleaseDate,
} from "../utils/utils";

interface TvProps extends RouteComponentProps {
  tvId?: string;
}

const Tv = (props: TvProps) => {
  const { tvId } = useParams();
  const { data, isFetching } = useTv(parseInt(tvId));
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
    .map(({ id, name, backdrop_path, first_air_date }) => ({
      id,
      title: name,
      image: getImageSrc(backdrop_path, "backdrop"),
      caption: getReleaseDate(first_air_date),
    }));
  const [, recommendationGridItemWidth] = getImageHeightAndWidth("16/9", 7);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleIsModalOpen = useCallback(
    () => setIsModalOpen(!isModalOpen),
    [isModalOpen]
  );
  const trailer = data?.videos?.results?.find(({ type }) => type === "Trailer");

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
                alt={data?.name}
                loading="lazy"
                srcSet={imageSrc.srcset}
                src={imageSrc.src}
                showPointer={!!trailer}
                onClick={trailer && toggleIsModalOpen}
              />
            </picture>
            <figcaption>
              {trailer ? (
                <>
                  <TrailerButton className="btn" onClick={toggleIsModalOpen}>
                    <Youtube /> Watch Trailer
                  </TrailerButton>
                  <Modal onClose={toggleIsModalOpen} open={isModalOpen}>
                    <YoutubeTrailer
                      youtubeKey={trailer.key}
                      onClose={toggleIsModalOpen}
                      name={data?.name || ""}
                    />
                  </Modal>
                </>
              ) : (
                getReleaseDate(data?.first_air_date || Date.now().toString())
              )}
            </figcaption>
          </Figure>

          <MediaDescription>
            <div className="mediaHeading">
              <h1>
                {data?.name}
                <span>
                  {`(${new Date(
                    data?.first_air_date || Date.now()
                  ).getFullYear()})`}
                </span>
              </h1>
              <div className="mediaFacts">
                <span>
                  {getReleaseDate(
                    data?.first_air_date || Date.now().toString()
                  )}
                </span>
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
          mediaType={"person"}
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
                mediaType={"tv"}
                size={7}
              />
            ))}
          </div>
        </MediaGridSection>
      ) : null}
    </>
  );
};
export default Tv;
