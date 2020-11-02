import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    -ms-hyphenate-limit-chars,body{
        font-family: Calibri, 'Trebuchet MS', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #fff;
        font-size: 16px;
    }
`;
