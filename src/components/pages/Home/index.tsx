import styled from "styled-components";
import { Md5 } from 'ts-md5'
import { useEffect, useState } from "react";
import TextInput from "../../TextInput";

export default function Home() {

    const ts = Number(new Date());
    const publicKey = "5c829aac03a6c5d7c96d977384fa9892";
    const privateKey = "29b717a7be075eb02a480cded47084a69799de8c";
    const hash = Md5.hashStr(ts + privateKey + publicKey);

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))

        console.log(data)
    }, [setData, data, hash, ts])
    
    return(
        <section>
            <h2>Home</h2>
            <TextInput />
        </section>
    )
}