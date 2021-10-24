import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appContext } from '../AppContext';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import { ButtonContainer, Header } from '../Elements/StyledElements';
import useAsync from '../hooks/useAsync';
import { fetchPopularMovies, fetchUpcomingMovies } from '../services/api';
import { getImageURL } from '../utils/utils';

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

  const [movies, loadMovies] = useAsync(
    movieType === MovieType.Popular ? fetchPopularMovies : fetchUpcomingMovies,
    movieType === MovieType.Popular
      ? 'UPDATE_POPULAR_MOVIES'
      : 'UPDATE_UPCOMING_MOVIES'
  );

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const {
    movies: { popular, upcoming },
  } = appContext();

  const data = movieType === MovieType.Popular ? popular : upcoming;

  const mediaScrollerList = data.map(
    ({ id, title, backdrop_path, release_date }) => ({
      id,
      title,
      image: backdrop_path && getImageURL(backdrop_path, 'backdrop', 'w300'),
      caption: new Date(release_date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    })
  );

  return (
    <Section id="discover-movies">
      <Header>
        <h1>Discover Movies</h1>
        <ButtonContainer>
          <Button
            primary={movieType === MovieType.Popular}
            onClick={() => setMovieType(MovieType.Popular)}
          >
            Popular
          </Button>
          <Button
            primary={movieType === MovieType.Upcoming}
            onClick={() => setMovieType(MovieType.Upcoming)}
          >
            Upcoming
          </Button>
        </ButtonContainer>
      </Header>

      <MediaScroller
        list={mediaScrollerList}
        loading={movies.state === 'LOADING'}
        ratio="16/9"
      />
    </Section>
  );
};

export default DiscoverMovies;
