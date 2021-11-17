import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useClickOutside from "../hooks/useClickOutside";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import { debounce } from "../utils/utils";
import Button from "./Button";

const StyledButton = styled(Button)<{ isSelected: boolean }>`
  background-color: inherit;
  border: none;
  border-radius: unset;
  color: ${({ isSelected, theme: { colors } }) =>
    isSelected ? colors.text1 : colors.text2};
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.surface4};
  }

  &[aria-hidden="true"] {
    visibility: hidden;
  }
`;

const IconButton = styled(Button)<{ isHidden: boolean }>`
  border: none;
  position: absolute;
  background-color: inherit;
  z-index: 1;
  color: ${({ theme: { colors } }) => colors.text1};
  visibility: ${(props) => (props.isHidden ? "hidden" : "initial")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  border-bottom: 1px solid ${(props) => props.theme.colors.surface4};
  margin-inline: ${(props) => props.theme.size.lg};
  margin-block-end: ${(props) => props.theme.size.md};
  padding-block: ${(props) => props.theme.size.xxxs};

  & > button > svg {
    width: 2ch;
  }
`;

const DropDown = styled.div`
  background-color: ${(props) => props.theme.colors.surface3};
  width: max-content;

  position: absolute;
  transform: translate(-60%, -20px);
  z-index: 1;
  display: flex;
  flex-direction: column;

  max-block-size: 200px;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  & > button {
    width: 100%;
    padding-block: ${(props) => props.theme.size.xs};
    text-align: left;
  }
`;

const DropDownContainer = styled.div`
  position: relative;
  width: max-content;
`;

const getWidthAndHorizontalMargins = (elem: HTMLElement) => {
  const style = window.getComputedStyle(elem);
  return (
    elem.offsetWidth +
    parseInt(style.marginLeft, 10) +
    parseInt(style.marginRight, 10)
  );
};
type Item = {
  id: number;
  label: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
type ButtonGroupProps = {
  items: Item[];
};
const ButtonGroup = ({ items }: ButtonGroupProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLButtonElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hiddenItems, setHiddenItems] = useState<Item[]>([]);

  const [open, setOpen] = useState(false);

  const handleDropDown = () => setOpen(!open);

  const onWindowResize = useCallback(() => {
    // width of the container and icon
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      let occupiedWidth = iconRef.current?.offsetWidth || 0;

      let lastVisible = buttonRefs.current[0];

      let hiddenItems: Item[] = [];
      buttonRefs.current.forEach((element, index) => {
        if (element) {
          const width = getWidthAndHorizontalMargins(element);
          if (occupiedWidth + width <= containerWidth) {
            element.setAttribute("aria-hidden", "false");
            lastVisible = element;
          } else {
            element.setAttribute("aria-hidden", "true");
            hiddenItems.push(items[index]);
          }
          occupiedWidth += width;
        }
      });

      setHiddenItems(hiddenItems);
      // based on last visible button set iconButton position
      if (lastVisible && iconRef.current && dropDownRef.current) {
        iconRef.current.style.left = `${
          lastVisible.offsetLeft + lastVisible.clientWidth
        }px`;
        dropDownRef.current.style.left = `${iconRef.current.offsetLeft}px`;
      }
    }
  }, [items]);

  useEffect(() => {
    onWindowResize();
    const debouncedFunc = debounce(onWindowResize, 100);
    window.addEventListener("resize", debouncedFunc);
    return () => {
      window.removeEventListener("resize", debouncedFunc);
    };
  }, [items, onWindowResize]);

  useClickOutside(dropDownRef, () => open && handleDropDown());

  return (
    <>
      <ButtonWrapper ref={containerRef}>
        {items.map((item, i) => (
          <StyledButton
            key={item.id}
            data-button-id={item.id}
            onClick={item.onClick}
            isSelected={item.isSelected}
            ref={(ref) => (buttonRefs.current[i] = ref)}
          >
            {item.label}
          </StyledButton>
        ))}
        <IconButton
          onClick={handleDropDown}
          ref={iconRef}
          aria-label="Expand Genres"
          isHidden={hiddenItems.length === 0}
        >
          {open ? <ArrowUp /> : <ArrowDown />}
        </IconButton>
      </ButtonWrapper>

      <DropDownContainer ref={dropDownRef}>
        {open && (
          <DropDown>
            {hiddenItems.map((item) => (
              <StyledButton
                key={item.id}
                onClick={(e) => item.onClick(e)}
                data-button-id={item.id}
                isSelected={item.isSelected}
              >
                {item.label}
              </StyledButton>
            ))}
          </DropDown>
        )}
      </DropDownContainer>
    </>
  );
};

export default ButtonGroup;
