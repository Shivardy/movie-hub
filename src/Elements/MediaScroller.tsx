import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

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

  background-image: linear-gradient(to bottom, hsl(0 0% 40%), hsl(0 0% 20%));
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

type MediaScrollerProps = {
  list: {
    id: number;
    image: string;
    title: string;
    caption?: string;
  }[];
  ratio?: '2/3' | '1/1' | '16/9';
  loading?: boolean;
};

const MediaScroller = ({
  list,
  ratio = '1/1',
  loading = false,
}: MediaScrollerProps) => {
  const [widthRatio, heightRatio] = ratio.split('/').map((i) => +i);
  const size = '10em';
  const height =
    widthRatio > heightRatio ? size : `${(10 * heightRatio) / widthRatio}em`;

  const width =
    widthRatio > heightRatio ? `${(10 * widthRatio) / heightRatio}em` : size;

  const data = loading ? Array(10).fill({}) : list;
  return (
    <MediaScrollerUL>
      {data.map((item, index) => (
        <MediaItem key={item.id || index} inlineSize={width}>
          <Figure>
            <picture>
              {item.image ? (
                <Image
                  aspectRatio={ratio}
                  inlineSize={width}
                  blockSize={height}
                  alt={item.title}
                  loading="lazy"
                  src={item.image}
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
      ))}
    </MediaScrollerUL>
  );
};

export default MediaScroller;
