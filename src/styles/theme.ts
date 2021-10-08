import { createGlobalStyle } from 'styled-components';

export const getTheme = (isDarkMode = false) => {
  /* brand foundation */
  const hue = '200';
  const saturation = '100%';
  const lightness = '50%';

  /* light */
  const light = {
    brand: `hsl(${hue} ${saturation} ${lightness}`,
    text1: `hsl(${hue} ${saturation} 10%)`,
    text2: `hsl(${hue} 30% 30%)`,
    surface1: `hsl(${hue} 25% 90%)`,
    surface2: `hsl(${hue} 20% 99%)`,
    surface3: `hsl(${hue} 20% 92%)`,
    surface4: `hsl(${hue} 20% 85%)`,
    surfaceShadow: `hsl(${hue} 10% 20%)`,
    shadowStrength: '0.02',
  };

  const dark = {
    brand: `hsl(${hue} calc(${saturation} / 2) calc(${lightness} / 1.5))`,
    text1: `hsl(${hue} 15% 85%)`,
    text2: `hsl(${hue} 5% 65%)`,
    surface1: `hsl(${hue} 10% 10%)`,
    surface2: `hsl(${hue} 10% 15%)`,
    surface3: `hsl(${hue} 5% 20%)`,
    surface4: `hsl(${hue} 5% 25%)`,
    surfaceShadow: `hsl(${hue} 50% 3%)`,
    shadowStrength: '0.8',
  };

  function sizeStepUp(n: number, up = true): string {
    let result = 1;
    const typeScale = 1.25;
    while (n > 1) {
      result = up ? result * typeScale : result / typeScale;
      n--;
    }
    return `calc(1em * ${result})`;
  }

  return {
    colors: isDarkMode ? dark : light,
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
      below768: 'only screen and (max-width: 768px)',
      below375: 'only screen and (max-width: 375px)',
    },
  };
};

const theme = getTheme();
type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    block-size: 100%;
    background-color: ${({ theme }) => theme.colors.surface1};
    color: ${({ theme }) => theme.colors.text1};
    font-family: 'Roboto Mono', monospace, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media ${({ theme }) => theme.mediaQueries.below768} {
      font-size: 14px;
    }

    @media ${({ theme }) => theme.mediaQueries.below375} {
      font-size: 12px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
