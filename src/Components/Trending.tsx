import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appContext } from '../AppContext';
import MediaScroller from '../Elements/MediaScroller';
import useAsync from '../hooks/useAsync';
import { MediaType } from '../types/Trending';
import { fetchTrending } from '../utils/api';
import { getImageURL } from '../utils/utils';

const H1 = styled.h1`
  font-size: ${(props) => props.theme.size.xl};
`;

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  width: min-content;
  padding-inline: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.xs};
  grid-gap: ${(props) => props.theme.size.xs};
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${(props) => props.theme.size.xs};
  width: min-content;
  border-radius: ${(props) => props.theme.size.md};
  border: 1px solid ${({ theme }) => theme.colors.text1};
`;

const Button = styled.button<{ active?: boolean }>`
  width: min-content;
  height: min-content;
  color: ${({ theme, active }) =>
    active ? theme.colors.surface1 : theme.colors.text1};
  border-radius: ${(props) => props.theme.size.md};
  background-color: ${({ theme: { colors }, active }) =>
    active ? colors.text1 : colors.surface1};
  font-weight: ${(props) => (props.active ? 600 : 400)};
  cursor: pointer;
  border: none;

  padding-block: ${(props) => props.theme.size.xxs};
  padding-inline: ${(props) => props.theme.size.xl};
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
    data.map(({ id, title, poster_path }) => ({
      id,
      title,
      image: poster_path && getImageURL(poster_path, 'poster', 'w185'),
    })) || [];

  return (
    <section>
      <Header>
        <H1>Trending</H1>
        <ButtonContainer>
          <Button
            active={selectedMedia === MediaType.Movie}
            onClick={() => setSelectedMedia(MediaType.Movie)}
          >
            Movies
          </Button>
          <Button
            active={selectedMedia === MediaType.Tv}
            onClick={() => setSelectedMedia(MediaType.Tv)}
          >
            TV
          </Button>
        </ButtonContainer>
      </Header>

      <MediaScroller
        list={mediaScrollerList}
        size="10em:15em"
        loading={trendingStatus.state === 'LOADING'}
      />
    </section>
  );
};

export default Trending;
