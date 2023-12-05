import React from "react";
import {getUser} from "../welcome/welcome";
import {Round} from "./animepie";
import {Genres} from "./genres";
import {Years} from "./years";
import {Studios} from "./studios";


export const API_URL = 'http://localhost:3001/anidb';

export const fetchAniDB = await fetch(`${API_URL}`)
    .then(response=>response.json())
    .then(database => {return database})
    .catch(error=>{console.log(error)});

console.log(fetchAniDB);

const userAnime=fetchAniDB.filter(e=>e.user===getUser())
// tak samo jak w List.js

console.log(userAnime);

const AnimeQty=userAnime.length;

const moviesfilter=userAnime.filter(e=> e.type==="Movie");

const moviesHours=moviesfilter.filter(e=>e.duration.slice(2,3)==="h")
            .map(e=>(e.episodes*e.duration.slice(0,1)*60 + parseFloat(e.duration.slice(5,7))));

const moviesMins=moviesfilter.filter(e=>e.duration.slice(3,4)==="m")
            .map(e=>(e.episodes*e.duration.slice(0,2)))

const movies=moviesHours.concat(moviesMins);

console.log(movies);

const TVfilter=userAnime.filter(e=>e.type==='TV')

const TVHours=TVfilter.filter(e=>e.duration.slice(2,3)==="h")
    .map(e=>(e.episodes*e.duration.slice(0,1)*60 + parseFloat(e.duration.slice(5,7))));

const TVMinutes=TVfilter.filter(e=>e.duration.slice(3,4)==="m")
    .map(e=>(e.episodes*e.duration.slice(0,2)))

const TVshows=TVHours.concat(TVMinutes);

console.log(TVshows);

export const moviesQty=movies.length;
export const TVshowsQty=TVshows.length;



const movMins=movies.reduce((acc,ne)=>acc+ne,0);
const TVMins=TVshows.reduce((acc,ne)=>acc+ne,0);

const fullMins=movMins+TVMins;

console.log(fullMins);
function divideMins(time) {
    let hours = Math.floor(time / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);

    days = days - (years * 365);
    hours = hours - (years * 365 * 24) - (days * 24);
    let mins = time - (years * 365 * 24 * 60) - (days * 24 * 60) - (hours * 60);

    return {years, days, hours, mins};
}

export const Stats=()=>{
    return(
        <div className="main_stats">
            <div className="statistics">
                <div className="stats">
                    <h1>Anime watched:{AnimeQty}</h1>
                    <span>Time spend on all:</span>
                    <span>{divideMins(fullMins).years} Years</span>
                    <span>{divideMins(fullMins).days} Days</span>
                    <span>{divideMins(fullMins).hours} Hours</span>
                    <span>{divideMins(fullMins).mins} Minutes</span>
                </div>
                <div className="stats">
                    <h1>Movies watched:{moviesQty}</h1>
                    <span>Time spend on movies:</span>
                    <span>{divideMins(movMins).years} Years</span>
                    <span>{divideMins(movMins).days} Days</span>
                    <span>{divideMins(movMins).hours} Hours</span>
                    <span>{divideMins(movMins).mins} Minutes</span>
                </div>
                <div className="stats">
                    <h1>Serials watched:{TVshowsQty}</h1>
                    <span>Time spend on serials:</span>
                    <span>{divideMins(TVMins).years} Years</span>
                    <span>{divideMins(TVMins).days} Days</span>
                    <span>{divideMins(TVMins).hours} Hours</span>
                    <span>{divideMins(TVMins).mins} Minutes</span>
                </div>
             </div>

            <div className="Pie" ><Round/></div>
            <div className="Bars" ><Genres/></div>
            <div className="Bars" ><Years/></div>
            <div className="Bars" ><Studios/></div>
        </div>
    )}