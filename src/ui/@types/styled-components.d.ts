import { firstTheme } from '../helpers/styles/themes';

type CustomTheme = typeof firstTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}