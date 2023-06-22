import styled from "styled-components";
import { StyledLink } from "./StyleComponents/Link.style";

const StyledFooter = styled.footer`
    background-color: var(--bg-secondary);
    padding: .5em;
    box-shadow: 0 -6px 6px 2px var(--shadow);
    text-align: center;
    font-size: 18px;
`

export default function Footer() {
    return(
        <StyledFooter>
            <StyledLink href="https://www.marvel.com/">©2023 MARVEL</StyledLink>
        </StyledFooter>
    )
}