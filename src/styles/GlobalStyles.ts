import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #6610F2;
    --white: #F9F9F9;
    --white-200: #EAEAEA;
    --gray: #2F2F2F;
  }

  ::-webkit-scrollbar {
    transition: 500ms;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`