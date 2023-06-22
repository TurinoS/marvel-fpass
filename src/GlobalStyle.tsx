import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --marvel-red: #ec1d24;
        --font-color: #e1e6ee;
        --bg-primary: #17232c;
        --bg-secondary: #2b3642;
        --shadow: #0a1c29;
        --border-radius: 16px;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--font-color)
    }
`