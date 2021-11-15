import {
  createRef,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import useClickOutside from '../hooks/useClickOutside';
import ArrowDown from '../icons/ArrowDown';
import ArrowUp from '../icons/ArrowUp';
import { debounce } from '../utils/utils';
import Button from './Button';

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

  &[aria-hidden='true'] {
    visibility: hidden;
  }
`;

const IconButton = styled(Button)<{ isHidden: boolean }>`
  border: none;
  position: absolute;
  background-color: inherit;
  z-index: 1;
  color: ${({ theme: { colors } }) => colors.text1};
  visibility: ${(props) => (props.isHidden ? 'hidden' : 'initial')};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  border-bottom: 1px solid ${(props) => props.theme.colors.surface4};
  margin-inline: ${(props) => props.theme.size.lg};
  margin-block-end: ${(props) => props.theme.size.md};
  padding-block: ${(props) => props.theme.size.xxxs};
`;

const DropDown = styled.ul`
  background-color: ${(props) => props.theme.colors.surface3};
  width: max-content;
  list-style: none;

  position: absolute;
  transform: translate(-60%, -20px);
  z-index: 1;

  max-block-size: 200px;
  overflow-y: scroll;

  & > li {
    padding-block: ${(props) => props.theme.size.xxxs};
    padding-inline: ${(props) => props.theme.size.sm};
  }

  & > li > button {
    width: 100%;
    text-align: left;
  }
`;

const DropDownContainer = styled.div`
  position: relative;
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
  name: string;
};
type ButtonGroupProps = {
  items: Item[];
};
const ButtonGroup = ({ items }: ButtonGroupProps) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const iconRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const dropDownRef = useRef() as MutableRefObject<HTMLDivElement>;
  const buttonRefs = useRef(items.map(() => createRef<HTMLButtonElement>()));
  const [hiddenItems, setHiddenItems] = useState<Item[]>([]);

  const [open, setOpen] = useState(false);

  const handleDropDown = () => setOpen(!open);

  const onWindowResize = useCallback(() => {
    // width of the container and icon
    const containerWidth = containerRef.current.offsetWidth;
    let tempWidth = iconRef.current?.offsetWidth || 0;

    let lastVisible = buttonRefs.current[0].current;

    let hiddenItems: Item[] = [];
    buttonRefs.current.forEach((item, index) => {
      const element = item.current;
      if (element) {
        const width = getWidthAndHorizontalMargins(element);
        if (tempWidth + width <= containerWidth) {
          element.setAttribute('aria-hidden', 'false');
          lastVisible = element;
        } else {
          element.setAttribute('aria-hidden', 'true');
          hiddenItems.push(items[index]);
        }
        tempWidth += width;
      }
    });

    setHiddenItems(hiddenItems);
    // based on last visible button set iconButton position
    if (lastVisible && iconRef.current) {
      iconRef.current.style.left = `${
        lastVisible.offsetLeft + lastVisible.clientWidth
      }px`;
      dropDownRef.current.style.left = `${iconRef.current.offsetLeft}px`;
    }
  }, [items]);

  useEffect(() => {
    onWindowResize();
    const debouncedFunc = debounce(onWindowResize, 100);
    window.addEventListener('resize', debouncedFunc);
    return () => {
      window.removeEventListener('resize', debouncedFunc);
    };
  }, [items, onWindowResize]);

  useClickOutside(dropDownRef, () => open && handleDropDown());

  return (
    <>
      <ButtonWrapper ref={containerRef}>
        {items.map((item, i) => (
          <StyledButton
            key={item.id}
            onClick={() => console.log(item.name)}
            isSelected={i % 2 === 0}
            ref={buttonRefs.current[i]}
          >
            {item.name}
          </StyledButton>
        ))}
        <IconButton
          onClick={handleDropDown}
          ref={iconRef as MutableRefObject<HTMLButtonElement>}
          isHidden={hiddenItems.length === 0}
        >
          {open ? <ArrowUp /> : <ArrowDown />}
        </IconButton>
      </ButtonWrapper>

      <DropDownContainer ref={dropDownRef}>
        {open && (
          <DropDown>
            {hiddenItems.map((item) => (
              <li key={item.id}>
                <StyledButton
                  onClick={() => console.log('shiva')}
                  isSelected={true}
                >
                  {item.name}
                </StyledButton>
              </li>
            ))}
          </DropDown>
        )}
      </DropDownContainer>
    </>
  );
};

export default ButtonGroup;
