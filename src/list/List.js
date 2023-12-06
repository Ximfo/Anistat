import React from "react";

const API_URL = 'http://localhost:3001/anidb';

const fetchdatabase = await fetch(`${API_URL}`)
    .then(response=>response.json())
    .then(database => {return database})
    .catch(error=>{console.log(error)});

const Animedatabase=fetchdatabase.sort((a,b)=>
    a.title.toUpperCase().localeCompare(b.title.toUpperCase()))

console.log(Animedatabase)
export const List =()=> {
    return(
        <div className={'tableContent'}>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th className={'li_img'}>IMAGE</th>
                <th className={'aniTitle'}>TITLE</th>
                <th>GENRE</th>
                <th>EPISODES</th>
                <th>DURATION</th>
                <th>TYPE</th>
                <th>STUDIO</th>
                <th>YEAR</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{
                    Animedatabase.map((element, index) => {return (<li key={element.mal_id} >{index+1}</li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li className={'li_img'} key={element.mal_id} ><img src={element.image} alt={''}/></li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li key={element.mal_id} className={'aniTitle'}>{element.title}</li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li key={element.mal_id} >{element.genre}</li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li key={element.mal_id} >{element.episodes}</li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li key={element.mal_id} >{element.duration}</li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li key={element.mal_id} >{element.type}</li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li key={element.mal_id} >{element.studio}</li>)})
                }</td>
                <td>{
                    Animedatabase.map(element=>{return (<li key={element.mal_id} >{element.year}</li>)})
                }</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}