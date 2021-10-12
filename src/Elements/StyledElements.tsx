import styled from 'styled-components';

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
