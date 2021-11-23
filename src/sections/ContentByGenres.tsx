import React, { useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import MediaScroller from "../components/MediaScroller";
import { ButtonContainer, Header } from "../components/StyledElements";
import useContentByGenre from "../hooks/data/useContentByGenre";
import useGenres from "../hooks/data/useGenres";
import { MediaType } from "../types/common";
import { getImageSrc } from "../utils/utils";
import GenreSection from "./GenreSection";

const ContentByGenres = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );
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
          <section>
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
