import styled from "styled-components";
import { ImageRatio } from "../types/common";
import Button from "./Button";

export const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  padding-inline: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.xs};
  grid-gap: ${(props) => props.theme.size.xs};

  & h1 {
    font-size: ${(props) => props.theme.size.xl};
  }
`;

export const ButtonContainer = styled.div`
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

export const MediaScreenContainer = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.surface2},
    ${(props) => props.theme.colors.surface4}
  );
`;

export const ImageContainer = styled.div<{
  img?: string;
}>`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.xxl};
  padding-inline: calc(${(props) => props.theme.size.xxl} * 4);
  background-image: linear-gradient(
      to right,
      ${(props) => props.theme.getColorWithOpacity("surface1", 0.95)},
      ${(props) => props.theme.getColorWithOpacity("surface2", 0.9)}
    ),
    url(${(props) => props.img});

  background-size: cover;
  background-position: center;
  border-radius: 1ex;

  @media ${({ theme }) => theme.mediaQueries.below768} {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding-inline: ${(props) => props.theme.size.xxl};
  }
`;

export const Figure = styled.figure`
  background-color: ${(props) => props.theme.colors.surface2};
  border-radius: 1ex;
  height: 100%;

  & > figcaption {
    line-height: ${(props) => props.theme.size.lg};
    padding-block-end: ${(props) => props.theme.size.xs};
    text-align: center;
    padding-top: 0;
    width: 100%;
    font-weight: 600;
    font-size: ${(props) => props.theme.size.md};
  }
`;

type ImageProps = {
  aspectRatio: ImageRatio;
  inlineSize: string;
  blockSize: string;
  showPointer?: boolean;
};

export const Image = styled.img<ImageProps>`
  inline-size: ${(props) => props.inlineSize};
  block-size: ${(props) => props.blockSize};

  aspect-ratio: ${(props) => props.aspectRatio};
  cursor: ${(props) => (props.showPointer ? "pointer" : "initial")};
  object-fit: cover;

  border-top-right-radius: 1ex;
  border-top-left-radius: 1ex;

  border: none;
  overflow: hidden;
  background-image: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.surface1}, ${props.theme.colors.surface2})`};
`;

export const MediaDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.size.xl};

  .mediaHeading > h1 {
    font-size: ${(props) => props.theme.size.xxl};
    line-height: ${(props) => props.theme.size.xxl};

    font-weight: 600;
    & > span {
      font-weight: 400;
    }
  }
  .mediaFacts {
    display: flex;
    line-height: ${(props) => props.theme.size.xxl};

    gap: ${(props) => props.theme.size.xxl};
    & > span {
      white-space: nowrap;
    }
  }
  .mediaGenres,
  .mediaSocial {
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.size.sm};
  }
`;

export const SectionWithBGColor = styled.section`
  background-image: ${(props) =>
    `linear-gradient(
  135deg,
  ${props.theme.colors.surface2},
  ${props.theme.colors.surface4}
)`};
`;

export const MediaGridSection = styled.section<{ gridItemSize: string }>`
  .mediaGrid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(${(props) => props.gridItemSize}, 1fr)
    );
    gap: ${(props) => props.theme.size.xl};

    padding-inline: ${(props) => props.theme.size.lg};
    padding-block: ${(props) => props.theme.size.xs};

    & > div {
      justify-self: center;
    }
  }
`;

export const TrailerButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: transparent;
  color: ${(props) => props.theme.colors.text1};
  font-size: ${(props) => props.theme.size.md};
  border: none;

  & > svg {
    margin-inline: ${(props) => props.theme.size.xs};
  }
`;
