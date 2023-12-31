import React from "react";
import {Round} from "./animepie";
import {Genres} from "./genres";
import {Years} from "./years";
import {Studios} from "./studios";
import {Raitings} from "./raitings";


const API_URL = 'http://localhost:3001/anidb';

export const fetchdb = await fetch(`${API_URL}`)
    .then(response=>response.json())
    .then(database => {return database})
    .catch(error=>{console.log(error)});

console.log(fetchdb);

const AnimeQty=fetchdb.length;

const moviesfilter=fetchdb.filter(e=> e.type==="Movie");

const moviesHours=moviesfilter.filter(e=>e.duration.slice(2,3)==="h")
            .map(e=>(e.episodes*e.duration.slice(0,1)*60 + parseFloat(e.duration.slice(5,7))));

const moviesMins=moviesfilter.filter(e=>e.duration.slice(3,4)==="m")
            .map(e=>(e.episodes*e.duration.slice(0,2)))

const movies=[...moviesHours ,...moviesMins];

console.log(movies);

const TVfilter=fetchdb.filter(e=>e.type==='TV')

const TVHours=TVfilter.filter(e=>e.duration.slice(2,3)==="h")
    .map(e=>(e.episodes*e.duration.slice(0,1)*60 + parseFloat(e.duration.slice(5,7))));

const TVMinutes=TVfilter.filter(e=>e.duration.slice(3,4)==="m")
    .map(e=>(e.episodes*e.duration.slice(0,2)))

const TVshows=[...TVHours, ...TVMinutes];

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
                <div className={"stats"}>
                    <div className="animestat">
                        <h1>Animes</h1>
                        <h1>{AnimeQty}</h1>
                        <span>Time spend:</span>
                        <span>{divideMins(fullMins).years} Years</span>
                        <span>{divideMins(fullMins).days} Days</span>
                        <span>{divideMins(fullMins).hours} Hours</span>
                        <span>{divideMins(fullMins).mins} Minutes</span>
                    </div>
                    <div className="moviestat">
                        <h1>Movies</h1>
                        <h1>{moviesQty}</h1>
                        <span>Time spend:</span>
                        <span>{divideMins(movMins).years} Years</span>
                        <span>{divideMins(movMins).days} Days</span>
                        <span>{divideMins(movMins).hours} Hours</span>
                        <span>{divideMins(movMins).mins} Minutes</span>
                    </div>
                    <div className="TVstat">
                        <h1>Serials</h1>
                        <h1>{TVshowsQty}</h1>
                        <span>Time spend:</span>
                        <span>{divideMins(TVMins).years} Years</span>
                        <span>{divideMins(TVMins).days} Days</span>
                        <span>{divideMins(TVMins).hours} Hours</span>
                        <span>{divideMins(TVMins).mins} Minutes</span>
                    </div>
                </div>
                <div className="Pie" ><Round/></div>
             </div>
            <div className="Bars genres" ><Genres/></div>
            <div className="Bars years" ><Years/></div>
            <div className="Bars studios" ><Studios/></div>
            <div className="Bars raitings" ><Raitings/></div>
        </div>
    )}