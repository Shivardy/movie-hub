import { useCallback, useState } from "react";
import styled from "styled-components";
import { appContext } from "../AppContext";
import Button from "../components/Button";
import Close from "../icons/Close";
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

  position: fixed;
  top: 0;

  input {
    all: unset;
    font-weight: 600;
    width: clamp(50%, calc(${(props) => props.theme.size.xxxl} * 10), 90%);
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
  width: clamp(56%, calc(${(props) => props.theme.size.xxxl} * 19), 90%);
  background-color: ${(props) => props.theme.colors.surface2};
  height: min(50%);
  border-radius: 1ex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Search = () => {
  const { displaySearch, dispatch } = appContext();
  const [searchValue, setSearchValue] = useState("");

  const closeSearch = useCallback(
    () => dispatch({ type: "DISPLAY_SEARCH", payload: !displaySearch }),
    [dispatch, displaySearch]
  );
  return displaySearch ? (
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
          <h1>{searchValue}</h1>
        </SearchResultContainer>
      </Backdrop>
    </>
  ) : null;
};

export default Search;
