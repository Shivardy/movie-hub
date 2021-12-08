import styled from "styled-components";

const Svg = styled.svg`
  fill: ${(props) => props.theme.colors.text1};
`;

const ArrowUp = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M5 15l7-7 7 7"
    />
  </Svg>
);
export default ArrowUp;
