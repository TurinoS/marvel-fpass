import styled from "styled-components";
import { Md5 } from 'ts-md5'
import { useEffect, useState } from "react";
import TextInput from "../../TextInput";
import StyledCard from "../../Card"

interface HomeProps {
    id: number
    name: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
}

const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 10vh;
`

export default function Home() {

    const ts = Number(new Date());
    const publicKey = "5c829aac03a6c5d7c96d977384fa9892";
    const privateKey = "29b717a7be075eb02a480cded47084a69799de8c";
    const hash = Md5.hashStr(ts + privateKey + publicKey);

    const [heroesData, setHeroesData] = useState<HomeProps[]>([]);
    const [heroName, setHeroName] = useState('hu');
    
    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${heroName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => setHeroesData(data.data.results))
        .catch(err => console.log(err))  
    }, [ts, publicKey, hash, heroName])
    
    return(
        <main>
            <TextInput />
            <StyledSection>
                {heroesData.map((hero) => (
                    <StyledCard 
                        key={hero.id} 
                        imgSrc={require(`${hero.thumbnail.path}.${hero.thumbnail.extension}`)}
                        imgAlt={`Thumbnail do ${hero.name}`}
                        heroName={hero.name} 
                    />
                ))}
            </StyledSection>
        </main>
    )
}