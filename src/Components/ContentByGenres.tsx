import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Button from "../Elements/Button";
import ButtonGroup from "../Elements/ButtonGroup";
import MediaScroller from "../Elements/MediaScroller";
import { ButtonContainer, Header } from "../Elements/StyledElements";
import useContentByGenre from "../hooks/data/useContentByGenre";
import useGenres from "../hooks/data/useGenres";
import useInView from "../hooks/useInView";
import { Genre, MediaType } from "../types/common";
import { getImageSrc } from "../utils/utils";

const ContentByGenres = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(MediaType.Tv);
  const { data, isLoading } = useGenres();
  const { tvGenres = [], movieGenres = [] } = data || {};
  const tvGenresId = tvGenres.map(({ id }) => id);
  const commonGenres = movieGenres.filter(({ id }) => tvGenresId.includes(id));
  const genres = selectedMedia === MediaType.Movie ? movieGenres : tvGenres;
  const [selectedButtonId, setSelectedButtonId] = useState(genres[0]?.id);

  const buttonListItems = useMemo(
    () =>
      genres.map(({ id, name }) => ({
        id,
        label: name,
        isSelected: id === selectedButtonId,
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          const { buttonId } = e.currentTarget.dataset;
          if (buttonId) {
            setSelectedButtonId(parseInt(buttonId));
          }
        },
      })),
    [genres, selectedButtonId]
  );

  useEffect(() => {
    setSelectedButtonId(genres[0]?.id);
  }, [genres]);

  const { data: genreData = [], isLoading: genreDataIsLoading } =
    useContentByGenre(selectedMedia, selectedButtonId, true);

  const mediaScrollerList = genreData.map(
    ({ id, title, poster_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(poster_path, "poster"),
      caption: new Date(release_date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    })
  );

  return (
    <>
      {isLoading ? (
        <MediaScroller list={[]} loading ratio={"2/3"} />
      ) : (
        <>
          <Header>
            <h1>Genres</h1>
            <ButtonContainer>
              <Button
                primary={selectedMedia === MediaType.Movie}
                onClick={() => setSelectedMedia(MediaType.Movie)}
              >
                {MediaType.Movie}
              </Button>
              <Button
                primary={selectedMedia === MediaType.Tv}
                onClick={() => setSelectedMedia(MediaType.Tv)}
              >
                {MediaType.Tv}
              </Button>
            </ButtonContainer>
          </Header>
          <ButtonGroup items={buttonListItems} />
          <MediaScroller
            list={mediaScrollerList}
            ratio={"2/3"}
            loading={genreDataIsLoading}
          />

          {commonGenres.map((genre, index) => (
            <GenreSection genre={genre} key={genre.id} index={index} />
          ))}
        </>
      )}
    </>
  );
};

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
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );
  const isBackdrop = index % 2 === 0;

  // conditionally fetch only if the section is in view.
  const { data = [], isLoading } = useContentByGenre(
    selectedMedia,
    genre.id,
    inView
  );

  const mediaScrollerList = data.map(
    ({ id, title, poster_path, backdrop_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(
        isBackdrop ? backdrop_path : poster_path,
        isBackdrop ? "backdrop" : "poster"
      ),
      caption: new Date(release_date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    })
  );

  return (
    <Section ref={ref} isBackdrop={isBackdrop}>
      <Header>
        <h1>{genre.name}</h1>
        <ButtonContainer>
          <Button
            primary={selectedMedia === MediaType.Movie}
            onClick={() => setSelectedMedia(MediaType.Movie)}
          >
            {MediaType.Movie}
          </Button>
          <Button
            primary={selectedMedia === MediaType.Tv}
            onClick={() => setSelectedMedia(MediaType.Tv)}
          >
            {MediaType.Tv}
          </Button>
        </ButtonContainer>
      </Header>
      <MediaScroller
        list={mediaScrollerList}
        ratio={isBackdrop ? "16/9" : "2/3"}
        // if not in the view just render loading screen
        loading={inView ? isLoading : true}
      />
    </Section>
  );
};

export default ContentByGenres;
