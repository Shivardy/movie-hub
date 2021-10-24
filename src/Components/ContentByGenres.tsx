import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appContext } from '../AppContext';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import { ButtonContainer, Header } from '../Elements/StyledElements';
import useAsync from '../hooks/useAsync';
import {
  fetchGenres,
  fetchMoviesByGenre,
  fetchTvByGenre,
} from '../services/api';
import { Genre, MediaType } from '../types/common';
import { getImageURL } from '../utils/utils';

const ContentByGenres = () => {
  const [status, loadGenre] = useAsync(fetchGenres, 'UPDATE_GENRES');
  useEffect(() => {
    loadGenre();
  }, [loadGenre]);

  const {
    movies: { genres: movieGenres },
    tv: { genres: tvGenres },
  } = appContext();

  const tvGenresId = tvGenres.map(({ id }) => id);
  const commonGenres = movieGenres.filter(({ id }) => tvGenresId.includes(id));

  return (
    <>
      {status.state === 'LOADING' ? (
        <MediaScroller list={[]} loading />
      ) : (
        commonGenres.map((genre, index) => (
          <GenreSection genre={genre} key={genre.id} index={index} />
        ))
      )}
    </>
  );
};

const Section = styled.section<{ isBackdrop: boolean }>`
  background-image: ${(props) =>
    props.isBackdrop
      ? `linear-gradient(
      to bottom,
      ${props.theme.colors.surface2},
      ${props.theme.colors.surface3}
    )`
      : 'none'};
`;
type GenreSectionProps = { genre: Genre; index: number };
const GenreSection = ({ genre, index }: GenreSectionProps) => {
  const isBackdrop = index % 2 === 1;
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );

  const [genreContent, loadGenreContent] = useAsync(
    selectedMedia === MediaType.Movie ? fetchMoviesByGenre : fetchTvByGenre,
    selectedMedia === MediaType.Movie
      ? 'UPDATE_MOVIES_BY_GENRE'
      : 'UPDATE_TV_BY_GENRE'
  );

  useEffect(() => {
    loadGenreContent(genre.id);
  }, [genre.id, loadGenreContent]);

  const { movies, tv } = appContext();

  const genres = selectedMedia === MediaType.Movie ? movies.genres : tv.genres;
  const currentGenre = genres.find(({ id }) => genre.id === id);

  const mediaScrollerList =
    currentGenre?.data.map(
      ({ id, title, poster_path, backdrop_path, release_date }) => ({
        id,
        title,
        image:
          poster_path &&
          getImageURL(
            isBackdrop ? backdrop_path : poster_path,
            isBackdrop ? 'backdrop' : 'poster',
            isBackdrop ? 'w300' : 'w342'
          ),
        caption: new Date(release_date).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      })
    ) || [];

  return (
    <Section isBackdrop={isBackdrop}>
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
        ratio={isBackdrop ? '16/9' : '2/3'}
        loading={genreContent.state === 'LOADING'}
      />
    </Section>
  );
};

export default ContentByGenres;
