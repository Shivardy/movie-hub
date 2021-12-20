import { navigate } from "@reach/router";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { appContext } from "../AppContext";
import Button from "../components/Button";
import useSearch from "../hooks/data/useSearch";
import useTrending, { TrendingAll } from "../hooks/data/useTrending";
import useDebounce from "../hooks/useDebounce";
import Camera from "../icons/Camera";
import Close from "../icons/Close";
import MovieIcon from "../icons/MovieIcon";
import PersonIcon from "../icons/PersonIcon";
import SearchIcon from "../icons/SearchIcon";
import TrendingIcon from "../icons/TrendingIcon";
import { SearchResult } from "../types/Search";
import { getImageSrc } from "../utils/utils";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.sm};
  gap: ${(props) => props.theme.size.sm};
  background-color: ${(props) => props.theme.colors.surface2};
  height: calc(${(props) => props.theme.size.xxl} * 2);
  width: 100%;
  z-index: 2;

  position: fixed;
  top: 0;

  input {
    all: unset;
    font-weight: 600;
    width: clamp(50%, calc(${(props) => props.theme.size.xxxl} * 10), 85%);
  }

  & > svg:nth-of-type(1) {
    width: 2ch;
  }
`;

const StyledButton = styled(Button)`
  all: unset;
  place-content: center;
  display: flex;
  place-items: center;
  padding: ${(props) => props.theme.size.xs};
  border-radius: 1ex;

  color: ${(props) => props.theme.colors.text1};
  background-color: ${(props) => props.theme.colors.surface3};

  svg {
    width: 3ch;
  }
  &:hover {
    cursor: pointer;

    color: ${(props) => props.theme.colors.text2};
    background-color: ${(props) => props.theme.colors.surface1};
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: calc(${(props) => props.theme.size.xxl} * 2);
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;

  background: ${(props) => props.theme.getColorWithOpacity("surface4", 0.96)};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SearchResultContainer = styled.div`
  margin-block-start: ${(props) => props.theme.size.md};
  width: clamp(55%, calc(${(props) => props.theme.size.xxxl} * 10), 90%);
  background-color: ${(props) => props.theme.colors.surface2};
  height: 70%;
  border-radius: 1ex;

  & > .search-header {
    display: flex;
    gap: ${(props) => props.theme.size.sm};
    align-items: center;

    background-color: ${(props) => props.theme.colors.surface1};
    padding: ${(props) => props.theme.size.sm};
    width: 100%;
    border-top-right-radius: 1ex;
    border-top-left-radius: 1ex;
  }

  & > .search-results {
    padding: ${(props) => props.theme.size.sm};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    height: 90%;
  }
`;

const SearchResultItem = styled.div`
  padding: ${(props) => props.theme.size.xxxs};
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.size.sm};
  cursor: pointer;

  & > svg {
    width: 5ch;
    & > path {
      stroke-width: 1;
    }
  }

  & > img {
    height: 8ch;
    object-fit: cover;
  }

  .search-item-details {
    line-height: 1.5rem;
    & > p {
      font-weight: 600;
    }
    & > span {
      font-size: ${(props) => props.theme.size.sm};
      color: ${(props) => props.theme.colors.text2};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.surface3};
  }
`;

const Search = () => {
  const { displaySearch, dispatch } = appContext();
  const [searchValue, setSearchValue] = useState("");
  const debouceSearchValue = useDebounce(searchValue, 150);
  const { data = [] } = useSearch(debouceSearchValue);
  const { data: trendingData = [] } = useTrending("all");

  // Showing Trending if no search Query
  const searchItems = debouceSearchValue ? data : trendingData;

  const closeSearch = useCallback(
    () => dispatch({ type: "DISPLAY_SEARCH", payload: !displaySearch }),
    [dispatch, displaySearch]
  );

  const ref = useRef<HTMLDivElement>(null);
  const escFunction = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      ref?.current?.click();
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <>
      <SearchBarContainer>
        <SearchIcon />
        <input
          type="text"
          autoFocus={true}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Movies, Tv shows, People"
        />
        <StyledButton onClick={closeSearch}>
          <Close />
        </StyledButton>
      </SearchBarContainer>
      <Backdrop onClick={closeSearch} ref={ref}>
        <SearchResultContainer onClick={(e) => e.stopPropagation()}>
          <div className="search-header">
            {debouceSearchValue ? <SearchIcon /> : <TrendingIcon />}
            <h3>{debouceSearchValue ? "Search Results" : "Trending"}</h3>
          </div>
          <div className="search-results">
            {searchItems.length === 0 ? <p>No Results Found 🙁</p> : null}
            {searchItems?.map((item) => (
              <SearchResultItem
                key={`${item.media_type}-${item.id}`}
                onClick={() => {
                  closeSearch();
                  navigate(
                    `${process.env.PUBLIC_URL}/${item.media_type}/${item.id}`
                  );
                }}
              >
                {renderSearchItemImage(item)}
                <div className="search-item-details">
                  <p>{item.media_type === "movie" ? item.title : item.name}</p>
                  <span>
                    {`in ${
                      item.media_type === "movie"
                        ? "Movies"
                        : item.media_type === "tv"
                        ? "Tv Shows"
                        : "People"
                    }`}
                  </span>
                </div>
              </SearchResultItem>
            ))}
          </div>
        </SearchResultContainer>
      </Backdrop>
    </>
  );
};

export default Search;

function renderSearchItemImage(
  item: SearchResult["results"][number] | TrendingAll["results"][number]
) {
  if (item.media_type === "movie") {
    const img = getImageSrc(item.poster_path, "poster");
    return item.poster_path ? (
      <img src={img.src} alt={item.title} srcSet={img.srcset}></img>
    ) : (
      <MovieIcon />
    );
  } else if (item.media_type === "tv") {
    const img = getImageSrc(item.poster_path, "poster");
    return item.poster_path ? (
      <img src={img.src} alt={item.name} srcSet={img.srcset}></img>
    ) : (
      <Camera />
    );
  }
  const img = getImageSrc(item.profile_path, "profile");
  return item.profile_path ? (
    <img src={img.src} alt={item.name} srcSet={img.srcset}></img>
  ) : (
    <PersonIcon />
  );
}
