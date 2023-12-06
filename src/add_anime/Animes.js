import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import { useParams } from "react-router-dom";

export const Animes = () => {
    const [anime, setAnime] = useState([]);
    const [animetitle, setanimetitle]=useState('')


    const { id } = useParams();

    const fetchAnimes = async () => {
        const data = await axios.get(
            `https://api.jikan.moe/v4/anime?q=${animetitle}`
        );
        setAnime(data.data.data);
    };
    console.log(anime)
    useEffect(() => {
        fetchAnimes();
    }, [id]);

    return (
        <>
            <div className={"findtype"}>
                <input type={"text"} value={animetitle} placeholder={"TYPE ANIME TO FIND"}
                       onChange={(e)=>setanimetitle(e.target.value)}/>
                <button onClick={fetchAnimes}>FIND</button>
            </div>
            <div className='cards'>
                {anime?.map(animes => (
                    <Card all={animes} key={animes.mal_id} />
                ))}
            </div>
        </>
    );
};
