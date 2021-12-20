import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import MediaScroller from "../components/MediaScroller";
import { ButtonContainer, Header } from "../components/StyledElements";
import useContentByGenre from "../hooks/data/useContentByGenre";
import useInView from "../hooks/useInView";
import { Genre, MediaTypeExcludePerson } from "../types/common";
import { GenreMovies } from "../types/Movies";
import { GenreTv } from "../types/Tv";
import { getImageSrc, getReleaseDate } from "../utils/utils";

const Section = styled.section<{ isBackdrop: boolean }>`
  background-image: ${(props) =>
    props.isBackdrop
      ? `linear-gradient(
    135deg,
    ${props.theme.colors.surface2},
    ${props.theme.colors.surface4}
  )`
      : "none"};
`;
type GenreSectionProps = { genre: Genre; index: number };

const GenreSection = ({ genre, index }: GenreSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [selectedMedia, setSelectedMedia] =
    useState<MediaTypeExcludePerson>("movie");
  const isBackdrop = index % 2 === 0;

  // conditionally fetch only if the section is in view.
  const { data = [], isLoading } = useContentByGenre(
    selectedMedia,
    genre.id,
    inView
  );

  const mediaScrollerList = data.map((item) => ({
    id: item.id,
    image: getImageSrc(
      isBackdrop ? item.backdrop_path : item.poster_path,
      isBackdrop ? "backdrop" : "poster"
    ),
    title:
      selectedMedia === "movie"
        ? (item as GenreMovies["results"][number]).title
        : (item as GenreTv["results"][number]).name,
    caption: getReleaseDate(
      selectedMedia === "movie"
        ? (item as GenreMovies["results"][number]).release_date
        : (item as GenreTv["results"][number]).first_air_date
    ),
  }));

  return (
    <Section ref={ref} isBackdrop={isBackdrop}>
      <Header>
        <h1>{genre.name}</h1>
        <ButtonContainer>
          <Button
            primary={selectedMedia === "movie"}
            onClick={() => setSelectedMedia("movie")}
          >
            {"movie"}
          </Button>
          <Button
            primary={selectedMedia === "tv"}
            onClick={() => setSelectedMedia("tv")}
          >
            {"tv"}
          </Button>
        </ButtonContainer>
      </Header>
      <MediaScroller
        list={mediaScrollerList}
        ratio={isBackdrop ? "16/9" : "2/3"}
        // if not in the view just render loading screen
        loading={inView ? isLoading : true}
        mediaType={selectedMedia}
      />
    </Section>
  );
};

export default GenreSection;
