import { useCallback, useState } from "react";
import Button from "../components/Button";
import MediaScroller from "../components/MediaScroller";
import { ButtonContainer, Header } from "../components/StyledElements";
import useTrending from "../hooks/data/useTrending";
import { MediaTypeExcludePerson } from "../types/common";
import { TrendingMovies } from "../types/Movies";
import { TrendingTv } from "../types/Tv";
import { getImageSrc, getReleaseDate } from "../utils/utils";

const Trending = () => {
  const [selectedMedia, setSelectedMedia] =
    useState<MediaTypeExcludePerson>("movie");

  const { data = [], isLoading } = useTrending(selectedMedia);

  const mediaScrollerList = data.map((item) => ({
    id: item.id,
    image: getImageSrc(item.poster_path, "poster"),
    title:
      selectedMedia === "movie"
        ? (item as TrendingMovies["results"][number]).title
        : (item as TrendingTv["results"][number]).name,
    caption: getReleaseDate(
      selectedMedia === "movie"
        ? (item as TrendingMovies["results"][number]).release_date
        : (item as TrendingTv["results"][number]).first_air_date
    ),
  }));

  const handleButton = useCallback(
    () => setSelectedMedia(selectedMedia === "movie" ? "tv" : "movie"),
    [selectedMedia]
  );

  return (
    <section id="trending">
      <Header>
        <h1>Trending</h1>
        <ButtonContainer>
          <Button
            primary={selectedMedia === "movie"}
            disabled={selectedMedia === "movie"}
            onClick={handleButton}
          >
            {"movie"}
          </Button>
          <Button
            primary={selectedMedia === "tv"}
            disabled={selectedMedia === "tv"}
            onClick={handleButton}
          >
            {"tv"}
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
