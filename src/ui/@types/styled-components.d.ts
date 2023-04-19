import { lightTheme } from 'ui/helpers/styles/themes';

type CustomTheme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme { }
  export interface ITheme {
    name: string;
    colors: {
      octocat: string,
      background: {
        primary: string,
        secondary: string,
        ternary: string,
      },
      text: {
        primary: string,
        secondary: string,
      },
      boxShadow: {
        primary: string,
      },
      border: {
        primary: string,
      },
      goToGitHub: {
        primary: string,
        secondary: string,
        background: {
          primary: string,
          secondary: string,
        }
      }
    }
  }
}
