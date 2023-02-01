import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
@media screen and (min-width: 620px){

}
    * {
        box-sizing: border-box;
    
    }
    main {
        text-align: center;
    }
`;

export default GlobalStyles;
