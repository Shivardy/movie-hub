import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = { primary: boolean };
const StyledButton = styled.button<StyledButtonProps>`
  min-width: max-content;
  height: min-content;
  color: ${({ theme, primary }) => {
    if (primary) {
      return theme.colors.surface1;
    }
    return theme.colors.text1;
  }};

  border-radius: ${(props) => props.theme.size.xs};
  border: 1px solid ${({ theme }) => theme.colors.text1};
  font-weight: 600;

  background-color: ${({ theme, primary }) => {
    if (primary) {
      return theme.colors.text1;
    }
    return 'inherit';
  }};

  text-transform: capitalize;
  cursor: pointer;

  padding-block: ${(props) => props.theme.size.xxxs};
  padding-inline: ${(props) => props.theme.size.md};
`;

type ButtonOwnProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  primary?: boolean;
};

type ButtonProps = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef(
  (
    {
      primary = true,
      onClick,
      children,
      disabled = false,
      ...rest
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <StyledButton
        ref={ref}
        primary={primary}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
