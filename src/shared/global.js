import { createGlobalStyle, css } from "styled-components";

export const Theme = {
  primary: "#093b35",
  primaryLight: "#2ae5cc",
  secondary: "#c28285",
  accent: "#582630",
  black1: "#202020",
  black2: "#272727",
  grey: "#bdd9d2",
  black: "#1C2120",
  white: "#F2F7F8",
  danger: "#AB495D",
  warning: "#F09165",
  success: "#F0CF65",
  info: "#81968F",
  hrGrey: "rgba(111, 111, 111, 0.22)",
  hrBlue: "rgba(4, 128, 144, 0.14)",
  shadow: "0 3px 7px rgba(0, 0, 0, 0.03)",
  shadow2: "0 6px 14px rgba(0, 0, 0, 0.06)",
};
export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const bodyStyles = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
