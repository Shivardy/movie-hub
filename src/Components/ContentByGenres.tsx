import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import useSWR from 'swr';
import { appContext } from '../AppContext';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import { ButtonContainer, Header } from '../Elements/StyledElements';
import { multiFetcher } from '../services/api';
import { Genre, MediaType } from '../types/common';
import { getImageSrc, getUrl } from '../utils/utils';

const ContentByGenres = () => {
  const { movies, tv, dispatch } = appContext();

  const result = useSWR(
    [getUrl('genre/tv/list'), getUrl('genre/movie/list')],
    multiFetcher,
    {
      onSuccess: (data) => {
        const [{ genres: tvGenres }, { genres: movieGenres }] = data;
        dispatch({ type: 'UPDATE_GENRES', payload: { tvGenres, movieGenres } });
      },
    }
  );

  const tvGenresId = tv.genres.length ? tv.genres.map(({ id }) => id) : [];
  const commonGenres = movies.genres.length
    ? movies.genres.filter(({ id }) => tvGenresId.includes(id))
    : [];

  return (
    <>
      {result.isValidating ? (
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
  const { dispatch, movies, tv } = appContext();

  const result = useSWR(
    getUrl(`discover/${selectedMedia}`, `&with_genres=${genreId}`),
    {
      onSuccess: (data) => {
        dispatch({
          type:
            selectedMedia === MediaType.Movie
              ? 'UPDATE_MOVIES_BY_GENRE'
              : 'UPDATE_TV_BY_GENRE',
          payload: { genreId, data },
        });
      },
    }
  );

  const genres = selectedMedia === MediaType.Movie ? movies.genres : tv.genres;
  const currentGenre = genres.find(({ id }) => genreId === id);

  const mediaScrollerList =
    currentGenre?.data.map(
      ({ id, title, poster_path, backdrop_path, release_date }) => ({
        id,
        title,
        image: getImageSrc(
          isBackdrop ? backdrop_path : poster_path,
          isBackdrop ? 'backdrop' : 'poster'
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
      loading={result.isValidating}
    />
  );
};

export default ContentByGenres;
