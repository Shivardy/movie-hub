import { useEffect, useState } from "react";

const useDarkMode = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const darkModeQuery = window?.matchMedia("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(darkModeQuery?.matches);
  useEffect(() => {
    const darkModeHandler = ({ matches }: MediaQueryListEvent): void =>
      setIsDarkMode(matches);
    darkModeQuery?.addListener(darkModeHandler);
    return () => darkModeQuery.removeEventListener("change", darkModeHandler);
  }, [darkModeQuery]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
