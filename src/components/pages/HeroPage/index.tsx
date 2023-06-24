import { StyledSection, StyledSectionHero, StyledSectionComics } from '../../StyleComponents/HeroPage.style';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useParams, Link } from "react-router-dom";
import { Md5 } from 'ts-md5'
import { useEffect, useState } from "react";
import ComicCard from "../../ComicCard"

interface HeroInfoProps {
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

interface ComicsInfoProps {
    id: number
    title: string
    thumbnail: {
        path: string
        extension: string
    }
    urls: [{
        url: string
    }]
    dates: [{
        date: string
    }]
}

export default function HeroPage() {

    const { id } = useParams();

    const publicKey = "919b746fc3ba8b9e7330d92cddafcdac";
    const privateKey = "9c4a30f90caa523f3e8a1e9c00211a7e6e941559";
    
    const [heroData, setHeroData] = useState<HeroInfoProps[]>([]);
    const [comicsData, setComicsData] = useState<ComicsInfoProps[]>([])

    useEffect(() => {
        const ts = Number(new Date());
        const hash = Md5.hashStr(ts + privateKey + publicKey);

        fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`, {
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

    useEffect(() => {
        const ts = Number(new Date());
        const hash = Md5.hashStr(ts + privateKey + publicKey);

        fetch(`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            setComicsData(data.data.results)})
        .catch(err => console.log(err))  
    }, [publicKey, id])


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
                            {
                                currentHero.description ? 
                                <p>{currentHero.description}</p> : 
                                <p>Sorry, {currentHero.name} character don´t have a description</p>
                            }
                        </div>
                    </StyledSectionHero>
                    <StyledSectionComics>
                        <div>
                            <h3>Some {currentHero.name} comics</h3>
                            <Link 
                                target="_blank" 
                                to={currentHero.urls[0].url}
                            >
                                Consult {currentHero.name}'s comics on Marvel official website
                            </Link>
                        </div>
                        {comicsData.map((comic) => {
                            if(comic.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                                return null;
                            }

                            return(
                                <ComicCard 
                                    key={comic.id} 
                                    comicTitle={comic.title} 
                                    imgSrc={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                                    imgAlt={`Thumbnail of ${comic.title} comic`} 
                                />
                            )
                        })}
                    </StyledSectionComics>  
                </>
            )}
        </StyledSection>
    )
}