import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Bebas Neue', cursive;

    box-sizing: border-box;
  
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  
    -webkit-user-drag: none;
  }
`;

export default GlobalStyle;