import { ImageRatio, ImageType, Media } from "../types/common";
import { MovieResult } from "../types/Movies";
import { TVResult } from "../types/Tv";
import { ImageSize } from "./constants";
import environment from "./environment";

const { apiKey, baseURL, imageBaseURL } = environment;

export const getUrl = (path: string, queryString = ""): string =>
  `${baseURL}${path}?api_key=${apiKey}${queryString}`;

export function getImageSrc(path: string | undefined, type: ImageType) {
  const img = { src: "", srcset: "" };
  if (path) {
    img.src = `${imageBaseURL}original${path}`;
    const sizes = ImageSize[type].filter((size) => size !== "original");
    const paths = sizes.map(
      (size) => `${imageBaseURL}${size}${path} ${size.substring(1)}w`
    );
    img.srcset = paths.join(", ");
  }
  return img;
}

export const getImageHeightAndWidth = (
  ratio: ImageRatio = "1/1",
  size: number = 10
) => {
  const [widthRatio, heightRatio] = ratio.split("/").map((i) => +i);

  const height =
    widthRatio > heightRatio
      ? `${size}rem`
      : `${(size * heightRatio) / widthRatio}rem`;

  const width =
    widthRatio > heightRatio
      ? `${(size * widthRatio) / heightRatio}rem`
      : `${size}rem`;

  return [height, width];
};

export const getReleaseDate = (release_date: string) =>
  new Date(release_date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const getMoviesFromApiResult = (results: MovieResult[]): Media[] => {
  const movies = results.map(
    ({
      title,
      id,
      backdrop_path,
      poster_path,
      vote_average,
      release_date,
    }) => ({
      title,
      id,
      backdrop_path,
      poster_path,
      vote_average,
      release_date,
    })
  );
  return movies;
};

export const getTVsFromApiResult = (results: TVResult[]): Media[] => {
  const tvs = results.map(
    ({
      name,
      id,
      backdrop_path,
      poster_path,
      vote_average,
      first_air_date,
    }) => ({
      title: name,
      release_date: first_air_date,
      id,
      backdrop_path,
      poster_path,
      vote_average,
    })
  );
  return tvs;
};

export function debounce<T extends Function>(fn: T, time = 50) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
      clearTimeout(timeout);
    }, time);
  };
}

export const isTouchScreen = () => "ontouchstart" in window;
