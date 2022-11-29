import { createGlobalStyle } from "styled-components";
import background from "./calculator.jpg"

export const GlobalStyled = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Montserrat', sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("${background}");
        background-attachment: fixed;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`;