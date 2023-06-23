import styled from "styled-components";
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useParams, Link } from "react-router-dom";
import { Md5 } from 'ts-md5'
import { useEffect, useState } from "react";
import ComicCard from "../../ComicCard"

interface HeroPageProps {
    name: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
    urls: [{
        url: string
    }]
    comics: {
        items: [{
            resourceURI: string
            name: string
        }]
    }
}

const StyledSection = styled.section`
    & a {
        text-decoration: none;
        background-color: var(--bg-secondary);
        padding: .5em 1em;
        border-radius: var(--border-radius);
        box-shadow: 2px 3px 6px 4px var(--shadow);
        display: flex;
        align-items: center;
        width: fit-content;
        gap: .5em;
        font-size: 18px
    }

    & a:hover {
        opacity: .75;
    }
`

const StyledSectionHero = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 60vw;
    gap: 2em;
    margin-top: 7vh;

    & img {
        width: 100%
    }

    & h1 {
        font-size: 52px;
    }

    & p {
        margin-top: 1em;
        font-size: 20px;
    }
`

const StyledSectionComics = styled.section`
    margin-top: 7vh;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`

export default function HeroPage() {

    const { id } = useParams();
    const numberId = Number(id);

    const publicKey = "919b746fc3ba8b9e7330d92cddafcdac";
    const privateKey = "9c4a30f90caa523f3e8a1e9c00211a7e6e941559";
    

    const [heroData, setHeroData] = useState<HeroPageProps[]>([]);

    useEffect(() => {
        const ts = Number(new Date());
        const hash = Md5.hashStr(ts + privateKey + publicKey);

        fetch(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => setHeroData(data.data.results))
        .catch(err => console.log(err))  
    }, [publicKey, id])

    const currentHero = heroData[0];

    return(
        <StyledSection>
            <Link to="/" ><MdOutlineKeyboardBackspace />Back</Link>
            {currentHero && (
                <>
                    <StyledSectionHero>
                        <img 
                            src={`${currentHero.thumbnail.path}/portrait_fantastic.${currentHero.thumbnail.extension}`} 
                            alt={`imagem do ${currentHero.name}`} 
                        />
                        <div>
                            <h1>{currentHero.name}</h1>
                            {currentHero.description ? <p>{currentHero.description}</p> : <p>Sorry, we dont {}</p>}
                        </div>
                    </StyledSectionHero>
                    <StyledSectionComics>
                        {currentHero.comics.items.map((comic) => (
                            <ComicCard 
                                key={id} 
                                id={numberId} 
                                comicName={comic.name} 
                                imgSrc={comic.resourceURI} 
                                imgAlt={`Thumbnail of ${comic.name} comic`} 
                            />
                        ))}
                        <Link 
                            target="_blank" 
                            to={currentHero.urls[0].url}
                        >
                            Consult {currentHero.name}'s comics
                        </Link>
                    </StyledSectionComics>  
                </>
            )}
        </StyledSection>
    )
}