import { RouteComponentProps } from "@reach/router";
import { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import MediaListItem, { ListItemType } from "../components/MediaListItem";
import {
  ButtonContainer,
  Header,
  MediaGridSection,
} from "../components/StyledElements";
import useDiscoverContent from "../hooks/data/useDiscoverContent";
import useGenres from "../hooks/data/useGenres";
import useLanguage from "../hooks/data/useLanguage";
import useInView from "../hooks/useInView";
import { StatusType } from "../types/common";
import { DiscoverTv } from "../types/Tv";
import {
  getImageHeightAndWidth,
  getImageSrc,
  getReleaseDate,
} from "../utils/utils";

const DropDownContainer = styled.div`
  width: calc(${(props) => props.theme.size.xxxl} * 7);
  padding: ${(props) => props.theme.size.xs};

  & > span {
    font-weight: 600;
    color: ${(props) => props.theme.colors.brand};
  }
`;

const Filters = styled.div`
  display: flex;
  padding: ${(props) => props.theme.size.xs};
`;
const mediaItemSize = 10;

const TvShows = (props: RouteComponentProps) => {
  const { data } = useGenres();
  const { tvGenres = [] } = data || {};
  const { data: languages = [] } = useLanguage();

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedGenre, setSelectedGenre] = useState<number>();
  const [status, setStatus] = useState<StatusType>("latest");

  const languageOptions = languages.map((item, index) => ({
    id: index,
    label: item.english_name,
  }));
  const genreOptions = tvGenres.map(({ name }, index) => ({
    id: index,
    label: name,
  }));

  const handleButton = useCallback(() => {
    setStatus(status === "latest" ? "upcoming" : "latest");
  }, [status]);
  const { ref, inView } = useInView();

  const {
    data: tvShows,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useDiscoverContent("tv", status, selectedLanguage, selectedGenre);

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  const { pages = [] } = tvShows || {};

  const [, recommendationGridItemWidth] = getImageHeightAndWidth(
    "2/3",
    mediaItemSize
  );

  return (
    <>
      <MediaGridSection id="tvshows" gridItemSize={recommendationGridItemWidth}>
        <Header>
          <h1>TV Shows</h1>
          <ButtonContainer>
            <Button
              primary={status === "latest"}
              disabled={status === "latest"}
              onClick={handleButton}
            >
              Latest
            </Button>
            <Button
              primary={status === "upcoming"}
              disabled={status === "upcoming"}
              onClick={handleButton}
            >
              Upcoming
            </Button>
          </ButtonContainer>
        </Header>
        <Filters>
          <DropDownContainer>
            <span>Select Language</span>
            <DropDown
              options={languageOptions}
              onSelect={(id) => {
                if (id) setSelectedLanguage(languages[id].iso_639_1);
              }}
            />
          </DropDownContainer>

          <DropDownContainer>
            <span>Select Genre</span>
            <DropDown
              options={genreOptions}
              onSelect={(id) => {
                if (id) setSelectedGenre(tvGenres[id].id);
              }}
            />
          </DropDownContainer>
        </Filters>
        <div className="mediaGrid">
          {pages.map((page, index) => (
            <TVPageData page={page} key={index} />
          ))}
          {isFetching
            ? (Array(10).fill({ image: {} }) as ListItemType[]).map(
                (item, index) => (
                  <MediaListItem
                    key={item.id || index}
                    item={item}
                    ratio="2/3"
                    mediaType={"movie"}
                    size={mediaItemSize}
                  />
                )
              )
            : null}
        </div>
        <button style={{ visibility: "hidden" }} ref={ref}></button>
      </MediaGridSection>
    </>
  );
};

const TVPageData = memo(({ page }: { page: DiscoverTv }) => {
  const { results } = page;
  if (results.length === 0) {
    return <h3>No Results Found 😢</h3>;
  }
  const items = results.map((item) => ({
    id: item.id,
    image: getImageSrc(item.poster_path, "poster"),
    title: item.name,
    caption: getReleaseDate(item.first_air_date),
  }));
  return (
    <>
      {items.map((item, index) => (
        <MediaListItem
          key={item.id || index}
          item={item}
          ratio="2/3"
          mediaType={"tv"}
          size={mediaItemSize}
        />
      ))}
    </>
  );
});

export default TvShows;
