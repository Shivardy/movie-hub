import { navigate } from "@reach/router";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { appContext } from "../AppContext";
import Button from "../components/Button";
import useSearch from "../hooks/data/useSearch";
import useTrending from "../hooks/data/useTrending";
import useDebounce from "../hooks/useDebounce";
import Camera from "../icons/Camera";
import Close from "../icons/Close";
import MovieIcon from "../icons/MovieIcon";
import PersonIcon from "../icons/PersonIcon";
import SearchIcon from "../icons/SearchIcon";

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
  padding: ${(props) => props.theme.size.sm};
  width: clamp(55%, calc(${(props) => props.theme.size.xxxl} * 10), 90%);
  background-color: ${(props) => props.theme.colors.surface2};
  height: 70%;
  border-radius: 1ex;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
`;

const SearchResultItem = styled.div`
  padding: ${(props) => props.theme.size.xxxs};
  width: 100%;
  display: flex;
  gap: ${(props) => props.theme.size.sm};
  cursor: pointer;

  & > svg {
    width: 5ch;
    & > path {
      stroke-width: 1;
    }
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
  const { data } = useSearch(debouceSearchValue);
  const { data: trendingData } = useTrending("movie");
  console.log(trendingData);
  const closeSearch = useCallback(
    () => dispatch({ type: "DISPLAY_SEARCH", payload: !displaySearch }),
    [dispatch, displaySearch]
  );

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
      <Backdrop onClick={closeSearch}>
        <SearchResultContainer onClick={(e) => e.stopPropagation()}>
          {data?.map((item) => (
            <SearchResultItem
              key={`${item.media_type}-${item.id}`}
              onClick={() => {
                closeSearch();
                navigate(
                  `${process.env.PUBLIC_URL}/${item.media_type}/${item.id}`
                );
              }}
            >
              {item.media_type === "movie" ? (
                <MovieIcon />
              ) : item.media_type === "tv" ? (
                <Camera />
              ) : (
                <PersonIcon />
              )}
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
        </SearchResultContainer>
      </Backdrop>
    </>
  );
};

export default Search;
