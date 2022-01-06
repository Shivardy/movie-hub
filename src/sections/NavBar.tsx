import { Link } from "@reach/router";
import styled from "styled-components";
import { appContext } from "../AppContext";
import Button from "../components/Button";
import Moon from "../icons/Moon";
import MovieDB from "../icons/MovieDB";
import SearchIcon from "../icons/SearchIcon";
import Sun from "../icons/Sun";
import User from "../icons/User";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-inline: ${(props) => props.theme.size.lg};
  padding-block: ${(props) => props.theme.size.sm};
  background-color: ${(props) => props.theme.colors.surface2};
  height: calc(${(props) => props.theme.size.xxl} * 2);

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

      span {
        color: ${(props) => props.theme.colors.brand};
      }

      @media ${({ theme }) => theme.mediaQueries.below768} {
        span {
          display: none;
        }
        svg {
          color: ${(props) => props.theme.colors.brand};
        }
      }
    }

    div {
      display: flex;
      padding-inline: ${(props) => props.theme.size.lg};
    }
  }

  .nav-items {
    display: flex;
    gap: ${(props) => props.theme.size.xs};

    & > a {
      padding: ${(props) => props.theme.size.xxs};
      font-size: ${(props) => props.theme.size.md};
      border-radius: 1ex;

      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.text2};
        background-color: ${(props) => props.theme.colors.surface1};
      }
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
  const { isDarkMode, toggleDarkMode, dispatch, displaySearch } = appContext();

  return (
    <Nav>
      <div className="nav-links">
        <Link to={process.env.PUBLIC_URL}>
          <MovieDB />
          <span>MovieHub</span>
        </Link>
        <div className="nav-items">
          <Link to={`${process.env.PUBLIC_URL}/movie`}>Movie</Link>
          <Link to={`${process.env.PUBLIC_URL}/tv`}>Tv</Link>
        </div>
      </div>
      <div className="nav-logos">
        <StyledButton
          onClick={() =>
            dispatch({ type: "DISPLAY_SEARCH", payload: !displaySearch })
          }
        >
          <SearchIcon />
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
