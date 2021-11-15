import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import { ButtonContainer, Header } from '../Elements/StyledElements';
import useDiscoverMovies from '../hooks/data/useDiscoverMovies';
import { MovieType } from '../types/common';
import { getImageSrc } from '../utils/utils';

const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface3}
  );
`;

const DiscoverMovies = () => {
  const [movieType, setMovieType] = useState<MovieType>(MovieType.Popular);

  const { data = [], isLoading } = useDiscoverMovies(movieType);

  const mediaScrollerList = data.map(
    ({ id, title, backdrop_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(backdrop_path, 'backdrop'),
      caption: new Date(release_date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    })
  );

  const handleButton = () =>
    setMovieType(
      movieType === MovieType.Popular ? MovieType.Upcoming : MovieType.Popular
    );
  return (
    <Section id="discover-movies">
      <Header>
        <h1>Discover Movies</h1>
        <ButtonContainer>
          <Button
            primary={movieType === MovieType.Popular}
            disabled={movieType === MovieType.Popular}
            onClick={handleButton}
          >
            Popular
          </Button>
          <Button
            primary={movieType === MovieType.Upcoming}
            disabled={movieType === MovieType.Upcoming}
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