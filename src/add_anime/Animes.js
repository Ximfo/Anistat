import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import { useParams } from "react-router-dom";

export const Animes = () => {
    const [anime, setAnime] = useState([]);
    const [animetitle, setanimetitle]=useState('')


    const { id } = useParams();

    const fetch = async () => {
        const data = await axios.get(
            `https://api.jikan.moe/v4/anime?q=${animetitle}`
        );
        setAnime(data.data.data);
    };
    console.log(anime)
    useEffect(() => {
        fetch();
    }, [id]);

    return (
        <>
            <input type={"text"} value={animetitle}
                   onChange={(e)=>setanimetitle(e.target.value)}/>
            <button onClick={fetch}>find</button>
            <div className='cards'>
                {anime?.map(animes => (
                    <Card all={animes} key={animes.mal_id} />
                ))}
            </div>
        </>
    );
};
