import { useState } from "react";
import Button from "../components/Button";
import MediaScroller from "../components/MediaScroller";
import { ButtonContainer, Header } from "../components/StyledElements";
import useTrending from "../hooks/data/useTrending";
import { MediaType } from "../types/common";
import { getImageSrc } from "../utils/utils";

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
      caption: new Date(release_date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    })
  );

  const handleButton = () =>
    setSelectedMedia(
      selectedMedia === MediaType.Movie ? MediaType.Tv : MediaType.Movie
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

      <MediaScroller list={mediaScrollerList} ratio="2/3" loading={isLoading} />
    </section>
  );
};

export default Trending;
