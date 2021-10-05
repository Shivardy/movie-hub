import React, { useEffect } from 'react';
import styled from 'styled-components';
import { appContext } from '../AppContext';
import useAsync from '../hooks/useAsync';
import { fetchTrending, getImageURL } from '../utils/api';

const H1 = styled.h1`
  font-size: ${(props) => props.theme.size.xxxl};
  padding-inline-start: ${(props) => props.theme.size.xs};
  padding-inline-end: ${(props) => props.theme.size.xs};
`;

const MediaScroller = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: ${(props) => props.theme.size.lg};

  padding-inline-start: ${(props) => props.theme.size.lg};
  padding-inline-end: ${(props) => props.theme.size.lg};
  padding-block-start: ${(props) => props.theme.size.sm};
  padding-block-end: ${(props) => props.theme.size.sm};

  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-left: ${(props) => props.theme.size.lg};
  scroll-padding-right: ${(props) => props.theme.size.lg};
  scroll-padding-inline: ${(props) => props.theme.size.lg};

  @media (prefers-reduced-motion: no-preference) {
    & {
      scroll-behavior: smooth;
    }
  }

  & > li {
    display: inline-block;

    &:last-of-type figure {
      position: relative;

      &::after {
        content: '';
        position: absolute;

        inline-size: ${(props) => props.theme.size.lg};
        block-size: 100%;

        inset-block-start: 0;
        inset-inline-end: calc(${(props) => props.theme.size.lg} * -1);
      }
    }
  }
`;

const Figure = styled.figure`
  scroll-snap-align: start;

  display: grid;
  gap: calc(${(props) => props.theme.size.lg} / 2);
  margin: 0;

  cursor: pointer;
  user-select: none;

  & > picture {
    inline-size: calc(${(props) => props.theme.size.lg} * 8);
    block-size: calc(${(props) => props.theme.size.lg} * 8);
  }

  & img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;

    border-radius: 1ex;
    overflow: hidden;

    background-image: linear-gradient(to bottom, hsl(0 0% 40%), hsl(0 0% 20%));
  }
`;

const Trending = () => {
  const [trending, loadTrending] = useAsync(
    fetchTrending,
    'UPDATE_TRENDING_BY_DAY'
  );

  const { trendingByDay } = appContext();
  console.log(trending, trendingByDay);
  useEffect(() => {
    loadTrending();
  }, [loadTrending]);

  return (
    <section>
      <H1>Trending</H1>
      {trending.state === 'SUCCESS' && (
        <MediaScroller>
          {trendingByDay?.results.map((item) => (
            <li key={item.id}>
              <Figure>
                <picture>
                  <img
                    alt={item.title}
                    loading="lazy"
                    src={getImageURL(item.poster_path, 'poster', 'w185')}
                  />
                </picture>
                <figcaption>{item.title}</figcaption>
              </Figure>
            </li>
          ))}
        </MediaScroller>
      )}
    </section>
  );
};

export default Trending;
