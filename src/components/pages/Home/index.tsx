import { StyledDiv } from '../../StyleComponents/Home.style';
import { Md5 } from 'ts-md5';
import { useEffect, useState } from "react";
import TextInput from "../../TextInput";
import StyledHeroCard from "../../HeroCard";

interface HomeProps {
    id: number
    name: string
    thumbnail: {
        path: string
        extension: string
    }
}

export default function Home() {

    const publicKey = "919b746fc3ba8b9e7330d92cddafcdac";
    const privateKey = "9c4a30f90caa523f3e8a1e9c00211a7e6e941559";

    const [heroesData, setHeroesData] = useState<HomeProps[]>([]);
    const [heroName, setHeroName] = useState('');
    
    useEffect(() => {
        const ts = Number(new Date());
        const hash = Md5.hashStr(ts + privateKey + publicKey);

        fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}${heroName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => setHeroesData(data.data.results))
        .catch(err => console.log(err))  
    }, [publicKey, heroName])
    
    return(
        <section>
            <TextInput onChange={e => setHeroName(`&nameStartsWith=${e.target.value}`)} />
            <StyledDiv>
                {heroesData.map((hero) => {
                    if(hero.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                        return null;
                    }
                    
                    return(
                    <StyledHeroCard 
                        key={hero.id} 
                        id={hero.id}
                        imgSrc={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
                        imgAlt={`${hero.name}'s image`}
                        heroName={hero.name} 
                    />
                )})}
            </StyledDiv>
        </section>
    )
}