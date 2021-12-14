import { Link } from "@reach/router";
import { useCallback } from "react";
import styled from "styled-components";
import { appContext } from "../AppContext";
import Button from "../components/Button";
import Moon from "../icons/Moon";
import MovieDB from "../icons/MovieDB";
import Search from "../icons/Search";
import Sun from "../icons/Sun";
import User from "../icons/User";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.size.lg};
  background-color: ${(props) => props.theme.colors.surface2};

  .nav-logos {
    display: flex;
    gap: ${(props) => props.theme.size.md};
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      gap: ${(props) => props.theme.size.xxxs};
      font-size: ${(props) => props.theme.size.lg};
      font-weight: 600;
      @media ${({ theme }) => theme.mediaQueries.below768} {
        span {
          display: none;
        }
      }
    }

    div {
      display: flex;
      padding-inline: ${(props) => props.theme.size.lg};
    }
  }
`;

const StyledButton = styled(Button)`
  all: unset;
  place-content: center;
  display: flex;
  place-items: center;
  padding: ${(props) => props.theme.size.xxs};
  border-radius: 1ex;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text2};
    background-color: ${(props) => props.theme.colors.surface1};
  }
`;

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = appContext();
  const toggleDarkMode = useCallback(
    () => setIsDarkMode(!isDarkMode),
    [isDarkMode, setIsDarkMode]
  );

  return (
    <Nav>
      <div className="nav-links">
        <Link to={process.env.PUBLIC_URL}>
          <MovieDB />
          <span>MovieHub</span>
        </Link>
        <div>
          <StyledButton onClick={console.log}>Movie</StyledButton>
          <StyledButton onClick={console.log}>Tv</StyledButton>
        </div>
      </div>
      <div className="nav-logos">
        <StyledButton onClick={console.log}>
          <Search />
        </StyledButton>
        <StyledButton onClick={toggleDarkMode}>
          {isDarkMode ? <Sun /> : <Moon />}
        </StyledButton>

        <StyledButton onClick={console.log}>
          <User />
        </StyledButton>
      </div>
    </Nav>
  );
};

export default NavBar;
