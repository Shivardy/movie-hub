import { getTheme } from '../styles/theme';

const theme = getTheme();
type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
