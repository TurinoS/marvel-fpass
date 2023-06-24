import styled from "styled-components";
import logo from '../img/marvel-studios-logo.png';
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    background-color: var(--bg-secondary);
    box-shadow: 0 6px 6px 2px var(--shadow);
    display: flex;
    justify-content: center;

    & img {
        width: 240px;
    }

    @media (max-width: 400px) {
        & img {
            width: 80vw
        }
    }
`

export default function Header() {
    return(
        <StyledHeader>
            <Link to="/"><img src={logo} alt="Marvel logo" /></Link>
        </StyledHeader>
    )
}