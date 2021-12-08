import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import { ImageRatio, MediaType } from "../types/common";
import {
  debounce,
  getImageHeightAndWidth,
  isTouchScreen,
} from "../utils/utils";
import MediaListItem from "./MediaListItem";

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

  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};

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
  ratio?: ImageRatio;
  loading?: boolean;
  mediaType?: MediaType;
};

const MediaScroller = ({
  list,
  ratio = "1/1",
  loading = false,
  mediaType = MediaType.Movie,
}: MediaScrollerProps) => {
  const [height, width] = getImageHeightAndWidth(ratio);
  const mediaList = useRef<HTMLUListElement>(document.createElement("ul"));
  const [isHiddenLeftArrow, setIsHiddenLeftArrow] = useState(true);
  const [isHiddenRightArrow, setIsHiddenRightArrow] = useState(false);

  const scrollToRight = useCallback(() => {
    const { offsetWidth, scrollLeft } = mediaList.current;
    mediaList.current.scrollTo({
      top: 0,
      left: scrollLeft + offsetWidth,
      behavior: "smooth",
    });
  }, []);

  const scrollToLeft = useCallback(() => {
    const { offsetWidth, scrollLeft } = mediaList.current;
    mediaList.current.scrollTo({
      top: 0,
      left: scrollLeft - offsetWidth,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (!mediaList.current) return;
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
  }, [isHiddenLeftArrow, isHiddenRightArrow]);

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
          <MediaItem inlineSize={width} key={`${item.id}-${index}`}>
            <MediaListItem item={item} ratio={ratio} mediaType={mediaType} />
          </MediaItem>
        ))}
      </MediaScrollerUL>
    </Div>
  );
};

export default MediaScroller;
