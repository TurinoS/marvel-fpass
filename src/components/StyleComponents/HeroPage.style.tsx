import styled from "styled-components";

export const StyledSection = styled.section`
    & a {
        text-decoration: none;
        background-color: var(--bg-secondary);
        padding: .5em 1em;
        border-radius: var(--border-radius);
        box-shadow: 2px 3px 6px 4px var(--shadow);
        display: flex;
        align-items: center;
        width: fit-content;
        gap: .5em;
        font-size: 18px
    }

    & a:hover {
        opacity: .75;
    }
`

export const StyledSectionHero = styled.section`
    display: flex;
    gap: 2em;
    margin-top: 7vh;

    & img {
        width: 350px;
    }

    & h1 {
        font-size: 52px;
    }

    & p {
        margin-top: 1em;
        font-size: 20px;
    }

    @media (max-width: 630px) {
        flex-wrap: wrap;
        gap: 1em 0;

        & img {
            width: 100%;
        }
    }
`

export const StyledSectionComics = styled.section`
    margin-top: 7vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;

    & div {
        display: flex;
        justify-content: space-between;
    }

    & h3 {
        font-size: 32px
    }

    @media (max-width: 780px) {
        & div {
            flex-direction: column-reverse;
            gap: 5vh
        }
    }
`