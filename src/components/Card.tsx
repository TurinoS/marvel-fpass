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

    &img {
        width: 100%;
    }
`

export default function Card(props: CardProps) {
    return(
        <StyledCard>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <h2>{props.heroName}</h2>
        </StyledCard>
    )
}