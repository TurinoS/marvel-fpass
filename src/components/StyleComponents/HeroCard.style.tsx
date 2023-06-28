import styled from "styled-components";

export const StyledHeroCard = styled.a`
    display: flex;
    flex-direction: column;
    width: 175px;
    max-height: 500px;
    text-decoration: none;
    background: linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-secondary) 50%, var(--marvel-red) 50%, var(--marvel-red) 100%);
    background-size: 100% 200%;
    background-position: 0% 0%;
    transition: background-position 350ms ease;
    
    &:hover {
        background-position: 0% -100%;
        cursor: pointer;
        transform: scale(1.1);
        transition: 350ms;
        box-shadow: 0 6px 6px 4px var(--shadow);
    }

    & div {
        padding: 1em;
        border-top: 5px solid var(--marvel-red)
    }
`