import { useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import { debounce, isTouchScreen } from '../utils/utils';

const Div = styled.div`
  position: relative;
`;

const Arrow = styled.span<{ bsize: string; isHidden: boolean }>`
  color: white;
  background: rgba(20, 20, 20, 0.5);

  cursor: pointer;
  font-size: 6em;

  position: absolute;
  top: ${(props) => props.theme.size.xs};
  height: ${(props) => props.bsize};
  width: 4%;

  text-align: center;
  display: none;
  justify-content: center;
  align-items: center;

  visibility: ${(props) => (props.isHidden ? 'hidden' : 'visible')};

  &:nth-of-type(1) {
    left: 0;
  }

  &:nth-of-type(2) {
    right: 0;
  }
  ${Div}:hover & {
    display: inline-flex;
  }
`;

const MediaScrollerUL = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: ${(props) => props.theme.size.xl};

  padding-inline: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.xs};

  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-left: ${(props) => props.theme.size.xl};
  scroll-padding-right: ${(props) => props.theme.size.xl};
  scroll-padding-inline: ${(props) => props.theme.size.xl};

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    & {
      scroll-behavior: smooth;
    }
  }
`;

type MediaItemProps = {
  inlineSize: string;
};

const MediaItem = styled.li<MediaItemProps>`
  display: inline-block;
  inline-size: ${(props) => props.inlineSize};
  block-size: min-content;
`;

const Figure = styled.figure`
  scroll-snap-align: start;

  display: grid;
  gap: calc(${(props) => props.theme.size.lg} / 2);
  margin: 0;

  cursor: pointer;
  user-select: none;

  outline-offset: 12px;

  &:focus {
    outline-offset: 7px;
  }
`;

type ImageProps = {
  aspectRatio: Exclude<MediaScrollerProps['ratio'], typeof undefined>;
  inlineSize: string;
  blockSize: string;
};
const Image = styled.img<ImageProps>`
  inline-size: ${(props) => props.inlineSize};
  block-size: ${(props) => props.blockSize};

  aspect-ratio: ${(props) => props.aspectRatio};

  object-fit: cover;

  border-radius: 1ex;
  border: none;
  overflow: hidden;
  background-image: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.surface1}, ${props.theme.colors.surface2})`};
`;

const Figcaption = styled.figcaption`
  line-height: ${(props) => props.theme.size.md};
  font-weight: 600;
  font-size: ${(props) => props.theme.size.md};

  & > p {
    font-size: ${(props) => props.theme.size.sm};
    font-weight: 400;
    color: ${(props) => props.theme.colors.text2};
    padding-block: ${(props) => props.theme.size.sm};
  }
`;

type ListItemType = {
  id: number;
  image: {
    src: string;
    srcset: string;
  };
  title: string;
  caption?: string;
};

type MediaScrollerProps = {
  list: ListItemType[];
  ratio?: '2/3' | '1/1' | '16/9';
  loading?: boolean;
};

const getHeightAndWidth = (ratio: MediaScrollerProps['ratio'] = '1/1') => {
  const [widthRatio, heightRatio] = ratio.split('/').map((i) => +i);
  const size = '10rem';
  const height =
    widthRatio > heightRatio ? size : `${(10 * heightRatio) / widthRatio}rem`;
  const width =
    widthRatio > heightRatio ? `${(10 * widthRatio) / heightRatio}rem` : size;
  return [height, width];
};

const MediaScroller = ({
  list,
  ratio = '1/1',
  loading = false,
}: MediaScrollerProps) => {
  const [height, width] = getHeightAndWidth(ratio);
  const mediaList = useRef<HTMLUListElement>(document.createElement('ul'));
  const [isHiddenLeftArrow, setIsHiddenLeftArrow] = useState(true);
  const [isHiddenRightArrow, setIsHiddenRightArrow] = useState(false);

  const scrollToRight = () => {
    const { offsetWidth, scrollLeft } = mediaList.current;
    mediaList.current.scrollTo({
      top: 0,
      left: scrollLeft + offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollToLeft = () => {
    const { offsetWidth, scrollLeft } = mediaList.current;
    mediaList.current.scrollTo({
      top: 0,
      left: scrollLeft - offsetWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const { offsetWidth, scrollLeft, scrollWidth } = mediaList.current;

    if (offsetWidth + scrollLeft >= scrollWidth) {
      setIsHiddenRightArrow(true);
    } else if (isHiddenRightArrow) {
      setIsHiddenRightArrow(false);
    }

    if (scrollLeft === 0) {
      setIsHiddenLeftArrow(true);
    } else if (isHiddenLeftArrow) {
      setIsHiddenLeftArrow(false);
    }
  };

  const data = loading
    ? (Array(10).fill({ image: {} }) as ListItemType[])
    : list;

  return (
    <Div>
      {!loading && !isTouchScreen() && (
        <>
          <Arrow
            bsize={height}
            onClick={scrollToLeft}
            isHidden={isHiddenLeftArrow}
          >
            <ArrowLeft />
          </Arrow>
          <Arrow
            bsize={height}
            onClick={scrollToRight}
            isHidden={isHiddenRightArrow}
          >
            <ArrowRight />
          </Arrow>
        </>
      )}
      <MediaScrollerUL ref={mediaList} onScroll={debounce(handleScroll)}>
        {data.map((item, index) => (
          <ListItem
            key={item.id || index}
            item={item}
            width={width}
            height={height}
            ratio={ratio}
          />
        ))}
      </MediaScrollerUL>
    </Div>
  );
};

export default MediaScroller;

type ListItemProps = {
  item: ListItemType;
  width: string;
  height: string;
  ratio: Exclude<MediaScrollerProps['ratio'], undefined>;
};

const ListItem = ({ height, item, width, ratio }: ListItemProps) => {
  return (
    <MediaItem inlineSize={width}>
      <Figure>
        <picture>
          {item.image.src ? (
            <Image
              aspectRatio={ratio}
              inlineSize={width}
              blockSize={height}
              alt={item.title}
              loading="lazy"
              srcSet={item.image.srcset}
              src={item.image.src}
            />
          ) : (
            <Skeleton width={width} height={height} />
          )}
        </picture>
        <Figcaption>
          {item.title || (
            <>
              <Skeleton />
              <Skeleton width="65%" />
            </>
          )}
          {item.caption && <p>{item.caption}</p>}
        </Figcaption>
      </Figure>
    </MediaItem>
  );
};
