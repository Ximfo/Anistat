import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios  from "axios";
import {AddAni} from "./AddMechanics";


export const CardDetail = () => {
    const [anime, setAnime] = useState([]);

    const { id } = useParams();

    const fetchAnime = async () => {
        const data = await axios.get(
            `https://api.jikan.moe/v4/anime?q=${id}&limit=1`
        );
        setAnime(data.data.data);
    };
    console.log(anime)
    useEffect(() => {
        fetchAnime();
    }, [id]);


    return (
        <div className='des'>
            {anime.map(all => (
                <div key={all.mal_id}>
                    <div className='carddes'>
                         <img src={all.images.jpg.image_url} alt='' />
                        <div className='cardDetail'>
                            <h1>{all.title}</h1>
                            <button className='addbtn' onClick={()=>AddAni(all)}>Add Anime</button>
                            <span>Genre: {all.genres[0].name}</span>
                            <span>Type: {all.type}</span>
                            <span>Number of episodes: {all.episodes}</span>
                            <span>Duration of episode: {all.duration}</span>
                            <span>Studio: {all.studios[0].name}</span>
                            <span>Year: {all.aired.prop.from.year}</span>
                        </div>
                    </div>
                    <p>{all.synopsis}</p>
                </div>
            ))}
        </div>
    );
};
