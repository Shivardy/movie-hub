import React, { useState } from 'react';
import useSWR from 'swr';
import { appContext } from '../AppContext';
import Button from '../Elements/Button';
import MediaScroller from '../Elements/MediaScroller';
import { ButtonContainer, Header } from '../Elements/StyledElements';
import { MediaType } from '../types/common';
import { getImageSrc, getUrl } from '../utils/utils';

const Trending = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(
    MediaType.Movie
  );

  const { dispatch, movies, tv } = appContext();
  const result = useSWR(getUrl(`trending/${selectedMedia}/day`), {
    onSuccess: (data) => {
      dispatch({
        type:
          selectedMedia === MediaType.Movie
            ? 'UPDATE_TRENDING_MOVIES_BY_DAY'
            : 'UPDATE_TRENDING_TV_BY_DAY',
        payload: data as any,
      });
    },
  });

  const data =
    selectedMedia === MediaType.Movie ? movies.trending : tv.trending;

  const mediaScrollerList = data.map(
    ({ id, title, poster_path, release_date }) => ({
      id,
      title,
      image: getImageSrc(poster_path, 'poster'),
      caption: new Date(release_date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    })
  );

  const handleButton = () =>
    setSelectedMedia(
      selectedMedia === MediaType.Movie ? MediaType.Tv : MediaType.Movie
    );

  return (
    <section id="trending">
      <Header>
        <h1>Trending</h1>
        <ButtonContainer>
          <Button
            primary={selectedMedia === MediaType.Movie}
            disabled={selectedMedia === MediaType.Movie}
            onClick={handleButton}
          >
            {MediaType.Movie}
          </Button>
          <Button
            primary={selectedMedia === MediaType.Tv}
            disabled={selectedMedia === MediaType.Tv}
            onClick={handleButton}
          >
            {MediaType.Tv}
          </Button>
        </ButtonContainer>
      </Header>

      <MediaScroller
        list={mediaScrollerList}
        ratio="2/3"
        loading={result.isValidating || result.error}
      />
    </section>
  );
};

export default Trending;
