import { ImageRatio, ImageType, Media } from "../types/common";
import { TVResult } from "../types/Tv";
import { ImageSize } from "./constants";
import environment from "./environment";

const { apiKey, baseURL, imageBaseURL } = environment;

export const getUrl = (path: string, queryString = ""): string =>
  `${baseURL}${path}?api_key=${apiKey}${queryString}`;

export function getImageSrc(path: string | undefined | null, type: ImageType) {
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

export const getBackgroundImageSrc = (path: string) =>
  `${imageBaseURL}w1920_and_h800_face${path}`;

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

export function calculate_age(dob: string) {
  var diff_ms = Date.now() - new Date(dob).getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export function minuteToTime(duration: number) {
  const hours = duration / 60;
  const rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}m`;
}

export function updateCacheData<T extends { id: number }>(data: T[]) {
  return (oldData: T[] = []) => {
    const allData = [...oldData, ...data];
    const uniqueIds = Array.from(new Set(allData.map((a) => a.id)));
    const result: T[] = [];
    uniqueIds.forEach((id) => {
      const movie = allData.find((m) => m.id === id);
      if (movie) result.push(movie);
    });
    return result;
  };
}

export const getTVsFromApiResult = (results: TVResult[]): Media[] => {
  const tvs = results.map(({ name, first_air_date, ...rest }) => ({
    title: name,
    release_date: first_air_date,
    ...rest,
  }));
  return tvs;
};

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  time = 50
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
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
