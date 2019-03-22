import * as styledComponents from "styled-components";

const {
    default: setStyles,
    css,
    keyframes,
    ThemeProvider,
    withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule< IThemeInterface >;

export interface IThemeInterface {
    primaryColor: string;
    secondaryColor: string;
    fontSmall: string;
    fontMedium: string;
    fontLarge: string;
    fontTitle: string;
    fontFamily: string;
    borderRadius: string;
}

export const theme = {
    primaryColor: "#1ca2bb",
    secondaryColor: "#ffdd93",
    grey: "#cfcfcf",
    depth: '0 1px 8px 0 rgba(0, 0, 0, 0.01)',
    depth2: '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
    fontSmall: "12px",
    fontMedium: "14px",
    fontLarge: "16px",
    fontTitle: "18px",
    fontFamily: "San Serif",
    borderRadius: "5px",
};

export const styled = setStyles;
export { css, keyframes, ThemeProvider, withTheme };
