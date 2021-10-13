import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appContext } from '../AppContext';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import { ButtonContainer, Header } from '../Elements/StyledElements';
import useAsync from '../hooks/useAsync';
import { fetchTrendingMovies, fetchTrendingTV } from '../services/api';
import { MediaType } from '../types/common';
import { getImageURL } from '../utils/utils';

const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface3}
  );
`;

const Trending = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );

  const [trendingStatus, loadTrending] = useAsync(
    selectedMedia === MediaType.Movie ? fetchTrendingMovies : fetchTrendingTV,
    selectedMedia === MediaType.Movie
      ? 'UPDATE_TRENDING_MOVIES_BY_DAY'
      : 'UPDATE_TRENDING_TV_BY_DAY'
  );

  const { movies, tv } = appContext();

  useEffect(() => {
    loadTrending();
  }, [loadTrending]);

  const data =
    selectedMedia === MediaType.Movie ? movies.trending : tv.trending;

  const mediaScrollerList = data.map(
    ({ id, title, poster_path, release_date }) => ({
      id,
      title,
      image: poster_path && getImageURL(poster_path, 'poster', 'w185'),
      caption: new Date(release_date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    })
  );

  return (
    <Section>
      <Header>
        <h1>Trending</h1>
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
        size="10em:15em"
        loading={trendingStatus.state === 'LOADING'}
      />
    </Section>
  );
};

export default Trending;
