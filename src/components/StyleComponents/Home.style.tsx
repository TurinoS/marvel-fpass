import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
    margin-top: 7.5vh;

    @media (max-width: 430px) {
        justify-content: center;
    }
`