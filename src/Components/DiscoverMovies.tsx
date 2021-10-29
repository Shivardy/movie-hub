import { useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { appContext } from '../AppContext';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import { ButtonContainer, Header } from '../Elements/StyledElements';
import { getImageSrc, getUrl } from '../utils/utils';

enum MovieType {
  Popular = 'popular',
  Upcoming = 'upcoming',
}

const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface3}
  );
`;

const DiscoverMovies = () => {
  const [movieType, setMovieType] = useState<MovieType>(MovieType.Popular);

  const {
    dispatch,
    movies: { popular, upcoming },
  } = appContext();

  const result = useSWR(getUrl(`movie/${movieType}`), {
    onSuccess: (data) => {
      dispatch({
        type:
          movieType === MovieType.Popular
            ? 'UPDATE_POPULAR_MOVIES'
            : 'UPDATE_UPCOMING_MOVIES',
        payload: data,
      });
    },
  });

  const data = movieType === MovieType.Popular ? popular : upcoming;

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
        loading={result.isValidating || result.error}
        ratio="16/9"
      />
    </Section>
  );
};

export default DiscoverMovies;
