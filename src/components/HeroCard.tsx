import { StyledHeroCard } from "./StyleComponents/HeroCard.style";

interface CardProps {
    id: number
    imgSrc: string
    imgAlt: string
    heroName: string
}

export default function HeroCard(props: CardProps) {
    return(
        <StyledHeroCard href={`/heropage/${props.id}`}>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <div>
                <h2>{props.heroName}</h2>
            </div>
        </StyledHeroCard>
    )
}