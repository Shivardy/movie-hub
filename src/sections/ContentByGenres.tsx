import React, { useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import MediaScroller from "../components/MediaScroller";
import { ButtonContainer, Header } from "../components/StyledElements";
import useContentByGenre from "../hooks/data/useContentByGenre";
import useGenres from "../hooks/data/useGenres";
import { MediaTypeExcludePerson } from "../types/common";
import { GenreMovies } from "../types/Movies";
import { GenreTv } from "../types/Tv";
import { getImageSrc, getReleaseDate } from "../utils/utils";
import GenreSection from "./GenreSection";

const ContentByGenres = () => {
  const [selectedMedia, setSelectedMedia] =
    useState<MediaTypeExcludePerson>("movie");
  const { data, isLoading } = useGenres();
  const { tvGenres = [], movieGenres = [] } = data || {};
  const tvGenresId = tvGenres.map(({ id }) => id);
  const commonGenres = movieGenres.filter(({ id }) => tvGenresId.includes(id));
  const genres = selectedMedia === "movie" ? movieGenres : tvGenres;
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

  const mediaScrollerList = genreData.map((item) => ({
    id: item.id,
    image: getImageSrc(item.poster_path, "poster"),
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
    <>
      {isLoading ? (
        <MediaScroller list={[]} loading ratio={"2/3"} />
      ) : (
        <>
          <section>
            <Header>
              <h1>Genres</h1>
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
            <ButtonGroup items={buttonListItems} />
            <MediaScroller
              list={mediaScrollerList}
              ratio={"2/3"}
              loading={genreDataIsLoading}
              mediaType={selectedMedia}
            />
          </section>

          {commonGenres.map((genre, index) => (
            <GenreSection genre={genre} key={genre.id} index={index} />
          ))}
        </>
      )}
    </>
  );
};

export default ContentByGenres;
