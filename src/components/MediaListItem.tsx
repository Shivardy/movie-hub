import { Link } from "@reach/router";
import { ImageRatio, MediaType } from "../types/common";
import { getImageHeightAndWidth } from "../utils/utils";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

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
  aspectRatio: ImageRatio;
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

const Figcaption = styled.figcaption<{
  inlineSize: string;
}>`
  line-height: ${(props) => props.theme.size.lg};
  inline-size: ${(props) => props.inlineSize};
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

type MediaListItemProps = {
  item: ListItemType;
  ratio: ImageRatio;
  mediaType: MediaType;
  size?: number;
};

const MediaListItem = ({
  item,
  ratio,
  mediaType,
  size,
}: MediaListItemProps) => {
  const [height, width] = getImageHeightAndWidth(ratio, size);

  return (
    <div style={{ width }}>
      <Link to={`${process.env.PUBLIC_URL}/${mediaType}/${item.id}`}>
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
          <Figcaption inlineSize={width}>
            {item.title || (
              <>
                <Skeleton />
                <Skeleton width="65%" />
              </>
            )}
            {item.caption && <p>{item.caption}</p>}
          </Figcaption>
        </Figure>
      </Link>
    </div>
  );
};

export default MediaListItem;
