import { lightTheme } from '../helpers/styles/themes';

type CustomTheme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}