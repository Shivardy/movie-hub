import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import useClickOutside from "../hooks/useClickOutside";
import useDebounce from "../hooks/useDebounce";
import ArrowDown from "../icons/ArrowDown";
import SearchIcon from "../icons/SearchIcon";

const DropDownContainer = styled.div`
  width: calc(${(props) => props.theme.size.xxxl} * 6);
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.size.xs};
  gap: ${(props) => props.theme.size.sm};
  background-color: ${(props) => props.theme.colors.surface2};

  input {
    all: unset;
    color: ${(props) => props.theme.colors.text2};
  }
`;
const SearchResults = styled.ul`
  height: 200px;
  overflow-y: scroll;
  border: 1px solid ${(props) => props.theme.colors.surface3};
  position: absolute;
  width: calc(${(props) => props.theme.size.xxxl} * 6);
  z-index: 1;
  background-color: ${(props) => props.theme.colors.surface2};

  & > li {
    padding-inline: ${(props) => props.theme.size.xxxs};
    font-size: ${(props) => props.theme.size.sm};

    &:hover {
      background-color: ${(props) => props.theme.colors.surface3};
      cursor: pointer;
    }
  }

  & > .selected {
    background-color: ${(props) => props.theme.colors.surface2};
  }
`;
const DropDownTrigger = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.size.xs};
  gap: ${(props) => props.theme.size.sm};
  background-color: ${(props) => props.theme.colors.surface2};
  width: calc(${(props) => props.theme.size.xxxl} * 6);

  cursor: pointer;
  & > svg {
    width: 2ch;
  }
`;

type DropDownProps = {
  options: { id: number; label: string }[];
  onSelect: (id: number | null) => void;
};

const DropDown = (props: DropDownProps) => {
  const [searchValue, setSearchValue] = useState("");
  const debouceSearchValue = useDebounce(searchValue.toLocaleLowerCase(), 150);
  const options = useMemo(
    () => [{ id: -Infinity, label: "None Selected" }, ...props.options],
    [props.options]
  );
  const [dropDownOptions, setDropDownOptions] = useState(options);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    DropDownProps["options"][number]
  >(options[0]);

  useEffect(() => {
    const searchResults = options.filter(({ label }) =>
      label.toLocaleLowerCase().match(debouceSearchValue)
    );
    setDropDownOptions(searchResults);
  }, [debouceSearchValue, options]);

  const searchResults = dropDownOptions.length ? dropDownOptions : options;

  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutside(
    dropDownRef,
    () => showDropDown && setShowDropDown(!showDropDown)
  );

  return !showDropDown ? (
    <DropDownTrigger onClick={() => setShowDropDown(!showDropDown)}>
      <span>{selectedOption.label}</span>
      <ArrowDown />
    </DropDownTrigger>
  ) : (
    <DropDownContainer ref={dropDownRef}>
      <SearchBarContainer>
        <input
          type="text"
          autoFocus={true}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchIcon />
      </SearchBarContainer>
      <SearchResults>
        {searchResults.map((item) => (
          <li
            key={item.id}
            className={selectedOption?.id === item.id ? "selected" : ""}
            onClick={() => {
              setShowDropDown(!showDropDown);
              setSelectedOption(item);
              props.onSelect(item.id === -Infinity ? null : item.id);
            }}
          >
            {item.label}
          </li>
        ))}
      </SearchResults>
    </DropDownContainer>
  );
};

export default DropDown;
