import { createGlobalStyle } from "styled-components";
import background from "./assets/calculator.jpg"

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
        background-image: linear-gradient(
            to bottom,
            ${({ theme }) => theme.color.outerSpace},
            ${({ theme }) => theme.color.outerSpace}
          ), url("${background}");
        background-attachment: fixed;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`;