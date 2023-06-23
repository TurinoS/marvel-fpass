import styled from "styled-components";
import { Md5 } from 'ts-md5'
import { useEffect, useState } from "react";
import TextInput from "../../TextInput";
import StyledCard from "../../Card"

interface HomeProps {
    id: number
    name: string
    thumbnail: {
        path: string
        extension: string
    }
}

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
    margin-top: 7.5vh;
`

export default function Home() {

    const publicKey = "919b746fc3ba8b9e7330d92cddafcdac";
    const privateKey = "9c4a30f90caa523f3e8a1e9c00211a7e6e941559";

    const [heroesData, setHeroesData] = useState<HomeProps[]>([]);
    const [heroName, setHeroName] = useState('');
    
    useEffect(() => {
        const ts = Number(new Date());
        const hash = Md5.hashStr(ts + privateKey + publicKey);

        fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}${heroName}`, {
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
                {heroesData.map((hero) => (
                    <StyledCard 
                        key={hero.id} 
                        id={hero.id}
                        imgSrc={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
                        imgAlt={`${hero.name}'s image`}
                        heroName={hero.name} 
                    />
                ))}
            </StyledDiv>
        </section>
    )
}