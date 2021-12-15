import { createGlobalStyle } from "styled-components";

export const getTheme = (isDarkMode = false) => {
  /* brand foundation */
  const hue = "40";
  const saturation = "100%";
  const lightness = "50%";

  /* light */
  const light = {
    brand: `hsl(${hue} ${saturation} ${lightness})`,
    text1: `hsl(${hue} ${saturation} 10%)`,
    text2: `hsl(${hue} 30% 30%)`,
    surface1: `hsl(${hue} 25% 90%)`,
    surface2: `hsl(${hue} 20% 99%)`,
    surface3: `hsl(${hue} 20% 92%)`,
    surface4: `hsl(${hue} 20% 85%)`,
  };

  const dark = {
    brand: `hsl(${hue} calc(${saturation} / 2) calc(${lightness} / 1.5))`,
    text1: `hsl(${hue} 15% 85%)`,
    text2: `hsl(${hue} 5% 65%)`,
    surface1: `hsl(${hue} 10% 10%)`,
    surface2: `hsl(${hue} 10% 15%)`,
    surface3: `hsl(${hue} 5% 20%)`,
    surface4: `hsl(${hue} 5% 25%)`,
  };

  function sizeStepUp(n: number, up = true): string {
    let result = 1;
    const typeScale = 1.25;
    while (n > 1) {
      result = up ? result * typeScale : result / typeScale;
      n--;
    }
    return `calc(1rem * ${result})`;
  }
  const colors = isDarkMode ? dark : light;
  return {
    colors,
    size: {
      xxxs: sizeStepUp(5, false),
      xxs: sizeStepUp(4, false),
      xs: sizeStepUp(3, false),
      sm: sizeStepUp(2, false),
      md: sizeStepUp(1),
      lg: sizeStepUp(2),
      xl: sizeStepUp(3),
      xxl: sizeStepUp(4),
      xxxl: sizeStepUp(5),
    },
    mediaQueries: {
      below1400: "only screen and (max-width: 1400px)",
      below768: "only screen and (max-width: 768px)",
      below375: "only screen and (max-width: 375px)",
    },
    getColorWithOpacity: (color: keyof typeof colors, opacity: number) => {
      const colorStr = colors[color];
      const [hue, saturation, lightness] =
        colorStr.match(/\d+/g)?.map(Number) ?? [];
      return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    },
  };
};

const theme = getTheme();
type ThemeType = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const GlobalStyles = createGlobalStyle`
  html {
    /* grow as per screen width */
    font-size: calc(1px + 1vw);
    line-height: calc(1.5rem + 0.5vw);
    block-size: 100%;
    background-color: ${({ theme }) => theme.colors.surface1};
    color: ${({ theme }) => theme.colors.text1};
    font-family: 'Roboto Mono', monospace, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media ${({ theme }) => theme.mediaQueries.below1400} {
      font-size: 16px;
    }

    @media ${({ theme }) => theme.mediaQueries.below768} {
      font-size: 14px;
    }

    @media ${({ theme }) => theme.mediaQueries.below375} {
      font-size: 12px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.surface1};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  section {
    padding-block: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
