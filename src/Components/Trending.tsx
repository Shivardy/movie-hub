import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appContext } from '../AppContext';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import useAsync from '../hooks/useAsync';
import { MediaType } from '../types/Trending';
import { fetchTrending } from '../utils/api';
import { getImageURL } from '../utils/utils';

const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface3}
  );
`;

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  width: min-content;
  padding-inline: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.xs};
  grid-gap: ${(props) => props.theme.size.xs};

  & h1 {
    font-size: ${(props) => props.theme.size.xl};
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: min-content;
  border-radius: ${(props) => props.theme.size.md};
  border: 1px solid ${({ theme }) => theme.colors.text1};

  & > button {
    border: none;
    border-radius: inherit;
  }
`;

const Trending = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );

  const [trendingStatus, loadTrending] = useAsync(
    fetchTrending,
    'UPDATE_TRENDING_BY_DAY'
  );

  const {
    trending: { movie, tv },
  } = appContext();

  useEffect(() => {
    loadTrending();
  }, [loadTrending]);

  const data = selectedMedia === 'movie' ? movie : tv;

  const mediaScrollerList =
    data.map(({ id, title, poster_path, release_date }) => ({
      id,
      title,
      image: poster_path && getImageURL(poster_path, 'poster', 'w185'),
      caption: new Date(release_date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    })) || [];

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
