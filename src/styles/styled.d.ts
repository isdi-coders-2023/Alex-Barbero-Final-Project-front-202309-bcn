import "styled-components";

export interface DefaultTheme {
  colors: {
    primary: string;
    dark: string;
    mediumLight: string;
    light: string;
    backDark: string;
    backSecondaryDark: string;
    backLight: string;
  };
  typography: {
    mainFontFamily: string;
    contentFontFamily: string;
    mainSize: string;
    principalInfoSize: string;
    detailInfoSize: string;
    infoSize: string;
  };
}
