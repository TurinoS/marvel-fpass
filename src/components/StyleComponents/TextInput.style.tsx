import styled from "styled-components";

export const StyledTextInput = styled.div`
    display: flex;
    align-items: center;
    width: 40vw;
    min-width: 355px;
    padding-left: .9em;
    background-color: var(--bg-secondary);
    border: none;
    border-radius: var(--border-radius);
    box-shadow: 0 0 6px 2px var(--shadow);
    font-size: 20px;
    
    & input {
        flex: 1;
        background-color: transparent;
        border: none;
        font-size: 20px;
        padding: .5em 1em .5em .3em;
        border-radius:  0 var(--border-radius) var(--border-radius) 0;

        &::placeholder {
            color: var(--font-color);
            font-size: 20px;
        }
    }

    & svg {
        font-size: 24px;
        margin-right: .5em;
    }

    @media (max-width: 430px) {
        min-width: 280px;
        width: 100%;

        & input:placeholder-shown {
            content: "Search a hero...";
        }
    }
`