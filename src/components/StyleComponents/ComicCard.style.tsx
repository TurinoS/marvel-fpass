import styled from "styled-components";

export const StyledComicCard = styled.span`
    display: flex;
    width: 100%;
    background-color: var(--bg-secondary);
    
    & img {
        width: 130px;
    }

    & span {
        width: 100%;
        padding: 1em;
        border-top: 5px solid var(--marvel-red)
    }
`