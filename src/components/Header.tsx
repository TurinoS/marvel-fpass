import styled from "styled-components";
import logo from '../img/marvel-studios-logo.png';

const StyledHeader = styled.header`
    background-color: var(--bg-secondary);
    box-shadow: 0 6px 6px 2px var(--shadow);
    display: flex;
    justify-content: center;

    & img {
        width: 400px;
    }
`

export default function Header() {
    return(
        <StyledHeader>
            <a href="/"><img src={logo} alt="Marvel logo" /></a>
        </StyledHeader>
    )
}