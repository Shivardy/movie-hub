import { useCallback, useState } from "react";
import Button from "../components/Button";
import MediaScroller from "../components/MediaScroller";
import { ButtonContainer, Header } from "../components/StyledElements";
import useTrending from "../hooks/data/useTrending";
import { MediaType } from "../types/common";
import { getImageSrc, getReleaseDate } from "../utils/utils";

const Trending = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );

  const { data = [], isLoading } = useTrending(selectedMedia);

  const mediaScrollerList = data.map(
    ({ id, title, poster_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(poster_path, "poster"),
      caption: getReleaseDate(release_date),
    })
  );

  const handleButton = useCallback(
    () =>
      setSelectedMedia(
        selectedMedia === MediaType.Movie ? MediaType.Tv : MediaType.Movie
      ),
    [selectedMedia]
  );

  return (
    <section id="trending">
      <Header>
        <h1>Trending</h1>
        <ButtonContainer>
          <Button
            primary={selectedMedia === MediaType.Movie}
            disabled={selectedMedia === MediaType.Movie}
            onClick={handleButton}
          >
            {MediaType.Movie}
          </Button>
          <Button
            primary={selectedMedia === MediaType.Tv}
            disabled={selectedMedia === MediaType.Tv}
            onClick={handleButton}
          >
            {MediaType.Tv}
          </Button>
        </ButtonContainer>
      </Header>

      <MediaScroller
        list={mediaScrollerList}
        ratio="2/3"
        loading={isLoading}
        mediaType={selectedMedia}
      />
    </section>
  );
};

export default Trending;
