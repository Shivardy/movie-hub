import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
        <MediaScroller list={[]} loading ratio={'2/3'} />
      ) : (
        commonGenres.map((genre, index) => (
          <GenreSectionWrapper genre={genre} key={genre.id} index={index} />
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
type GenreSectionWrapperProps = { genre: Genre; index: number };

const GenreSectionWrapper = ({ genre, index }: GenreSectionWrapperProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );

  const isBackdrop = index % 2 === 1;
  return (
    <Section ref={ref} isBackdrop={isBackdrop}>
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
      {inView ? (
        <GenreSection
          genreId={genre.id}
          selectedMedia={selectedMedia}
          isBackdrop={isBackdrop}
        />
      ) : (
        <MediaScroller list={[]} loading ratio={isBackdrop ? '16/9' : '2/3'} />
      )}
    </Section>
  );
};
type GenreSectionProps = {
  genreId: number;
  selectedMedia: MediaType;
  isBackdrop: boolean;
};
const GenreSection = ({
  genreId,
  selectedMedia,
  isBackdrop,
}: GenreSectionProps) => {
  const [genreContent, loadGenreContent] = useAsync(
    selectedMedia === MediaType.Movie ? fetchMoviesByGenre : fetchTvByGenre,
    selectedMedia === MediaType.Movie
      ? 'UPDATE_MOVIES_BY_GENRE'
      : 'UPDATE_TV_BY_GENRE'
  );

  useEffect(() => {
    loadGenreContent(genreId);
  }, [genreId, loadGenreContent]);

  const { movies, tv } = appContext();

  const genres = selectedMedia === MediaType.Movie ? movies.genres : tv.genres;
  const currentGenre = genres.find(({ id }) => genreId === id);

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
    <MediaScroller
      list={mediaScrollerList}
      ratio={isBackdrop ? '16/9' : '2/3'}
      loading={genreContent.state === 'LOADING'}
    />
  );
};

export default ContentByGenres;
