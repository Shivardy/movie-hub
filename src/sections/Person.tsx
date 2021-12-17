import { RouteComponentProps, useParams } from "@reach/router";
import MediaScroller from "../components/MediaScroller";
import ReadMore from "../components/ReadMore";
import {
  Figure,
  Header,
  Image,
  ImageContainer,
  MediaDescription,
  MediaScreenContainer,
  SectionWithBGColor,
} from "../components/StyledElements";
import usePerson from "../hooks/data/usePerson";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import {
  calculate_age,
  getImageHeightAndWidth,
  getImageSrc,
  getReleaseDate,
} from "../utils/utils";

interface PersonProps extends RouteComponentProps {
  tvId?: string;
}

const Person = (props: PersonProps) => {
  const { personId } = useParams();
  const { data, isFetching } = usePerson(parseInt(personId));
  const imageSrc = getImageSrc(data?.profile_path, "profile");
  const [height, width] = getImageHeightAndWidth("2/3", 20);

  const credits = data?.combined_credits?.cast || [];
  const movies = credits
    .filter(({ media_type }) => media_type === "movie")
    .map(({ id, title = "", poster_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(poster_path, "poster"),
      caption: release_date ? getReleaseDate(release_date) : "",
    }));

  const tvs = credits
    .filter(({ media_type }) => media_type === "tv")
    .map(({ id, name = "", backdrop_path, first_air_date }) => ({
      id,
      title: name,
      image: getImageSrc(backdrop_path, "backdrop"),
      caption: first_air_date ? getReleaseDate(first_air_date) : "",
    }));

  return (
    <>
      <MediaScreenContainer>
        <ImageContainer>
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
              />
            </picture>
            <figcaption>
              {getReleaseDate(data?.birthday || Date.now().toString())}
            </figcaption>
          </Figure>

          <MediaDescription>
            <div className="mediaHeading">
              <h1>{data?.name}</h1>
              <div className="mediaFacts">
                {data?.birthday ? (
                  <span>
                    {`${getReleaseDate(data?.birthday)} (${calculate_age(
                      data?.birthday
                    )} years old)`}
                  </span>
                ) : null}
              </div>
            </div>

            {data?.place_of_birth ? (
              <div>
                <h3>Place of Birth</h3>
                <p>{data?.place_of_birth}</p>
              </div>
            ) : null}

            {data?.external_ids ? (
              <div className="mediaSocial">
                {data?.external_ids.twitter_id ? (
                  <a
                    href={`https://twitter.com/${data?.external_ids.twitter_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter />
                  </a>
                ) : null}

                {data?.external_ids.instagram_id ? (
                  <a
                    href={`https://www.instagram.com/${data?.external_ids.instagram_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                ) : null}

                {data?.external_ids.facebook_id ? (
                  <a
                    href={`https://www.facebook.com/${data?.external_ids.facebook_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook />
                  </a>
                ) : null}
              </div>
            ) : null}

            {data?.biography ? (
              <div>
                <h3>Biography</h3>
                <ReadMore text={data?.biography} />
              </div>
            ) : null}
          </MediaDescription>
        </ImageContainer>
      </MediaScreenContainer>
      {movies.length ? (
        <SectionWithBGColor id="Movies">
          <Header>
            <h1>Acted in Movies</h1>
          </Header>
          <MediaScroller
            list={movies}
            ratio="2/3"
            loading={isFetching}
            mediaType={"movie"}
          />
        </SectionWithBGColor>
      ) : null}
      {tvs.length ? (
        <SectionWithBGColor id="actors">
          <Header>
            <h1>Acted in Tv Shows</h1>
          </Header>
          <MediaScroller
            list={tvs}
            ratio="16/9"
            loading={isFetching}
            mediaType={"tv"}
          />
        </SectionWithBGColor>
      ) : null}
    </>
  );
};
export default Person;
