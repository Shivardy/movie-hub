import { useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import MediaScroller from "../components/MediaScroller";
import { ButtonContainer, Header } from "../components/StyledElements";
import useDiscoverMovies from "../hooks/data/useDiscoverMovies";
import { MovieType } from "../types/common";
import { getImageSrc, getReleaseDate } from "../utils/utils";

const Section = styled.section`
  background-image: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface4}
  );
`;

const DiscoverMovies = () => {
  const [movieType, setMovieType] = useState<MovieType>("popular");

  const { data = [], isLoading } = useDiscoverMovies(movieType);

  const mediaScrollerList = data.map(
    ({ id, title, backdrop_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(backdrop_path, "backdrop"),
      caption: getReleaseDate(release_date),
    })
  );

  const handleButton = useCallback(
    () => setMovieType(movieType === "popular" ? "upcoming" : "popular"),
    [movieType]
  );

  return (
    <Section id="discover-movies">
      <Header>
        <h1>Discover Movies</h1>
        <ButtonContainer>
          <Button
            primary={movieType === "popular"}
            disabled={movieType === "popular"}
            onClick={handleButton}
          >
            Popular
          </Button>
          <Button
            primary={movieType === "upcoming"}
            disabled={movieType === "upcoming"}
            onClick={handleButton}
          >
            Upcoming
          </Button>
        </ButtonContainer>
      </Header>

      <MediaScroller
        list={mediaScrollerList}
        loading={isLoading}
        ratio="16/9"
      />
    </Section>
  );
};

export default DiscoverMovies;
