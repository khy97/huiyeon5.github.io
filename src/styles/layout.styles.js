import styled, { createGlobalStyle } from "styled-components";
import { MEDIA } from '../constants/constants';

export const LayoutBody = styled.main`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: "panel content";
    grid-template-columns: 35vw auto;
    z-index: -1;
    
    @media (max-width: ${MEDIA}px) {
      display: grid;
      grid-template-areas: "panel" 
      "content";
      grid-template-columns: none;
      grid-template-rows: 100vh auto;
      max-width: 100%;
    }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Raleway', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background:#eff3ff; 
  }
`;

