import styled from "styled-components";

interface CardProps {
    imgSrc: string
    imgAlt: string
    heroName: string
}

const StyledCard = styled.a`
    display: flex;
    flex-direction: column;
    width: 350px;
    text-decoration: none;
    color: var(--font-color);
    background: linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-secondary) 50%, var(--marvel-red) 50%, var(--marvel-red) 100%);
    background-size: 100% 200%;
    background-position: 0% 0%;
    transition: background-position 0.3s ease;

    &:hover {
    background-position: 0% -100%;
    }

    &img {
        width: 100%;
    }
`

export default function Card(props: CardProps) {
    return(
        <StyledCard>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <h2>{props.heroName}</h2>
            <p>Saiba mais</p>
        </StyledCard>
    )
}