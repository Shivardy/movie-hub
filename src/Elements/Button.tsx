import styled from 'styled-components';

type StyledButtonProps = { primary: boolean; secondary: boolean };
const StyledButton = styled.button<StyledButtonProps>`
  width: min-content;
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

  padding-block: ${(props) => props.theme.size.xxs};
  padding-inline: ${(props) => props.theme.size.xl};
`;

type ButtonOwnProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
};

type ButtonProps = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type PrimaryButton = ButtonProps & { primary?: boolean; secondary?: never };
type SecondaryButton = ButtonProps & { primary?: never; secondary?: boolean };
const Button = ({
  primary = true,
  secondary = false,
  onClick,
  children,
  disabled = false,
  ...rest
}: PrimaryButton | SecondaryButton) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
