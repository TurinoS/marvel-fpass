import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: var(--bg-secondary);
    padding: .5em;
    box-shadow: 0 -6px 6px 2px var(--shadow);
    text-align: center;
    font-size: 18px;

    & a {
        text-decoration: none;
        color: var(--font-color);
    }

    & a:hover {
        color: var(--marvel-red);
        transition: 350ms;
    }
`

export default function Footer() {
    return(
        <StyledFooter>
            <Link target="_blank" to="https://www.marvel.com/">Data provided by Marvel. © 2023 MARVEL</Link>
        </StyledFooter>
    )
}