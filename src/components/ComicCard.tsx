import { StyledComicCard } from "./StyleComponents/ComicCard.style";

interface ComicCardProps {
    imgSrc: string
    imgAlt: string
    comicTitle: string
}

export default function ComicCard(props: ComicCardProps) {
    return(
        <StyledComicCard>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <span>
                <h2>{props.comicTitle}</h2>
            </span>
        </StyledComicCard>
    )
}