
import {getUser} from "../welcome/welcome";

export const AddAni=async(all)=>{
    const API_URL = 'http://localhost:3001/anidb'

    const aniData = {
        user: getUser(),
        mal_id: all.mal_id,
        title: all.title,
        genre: all.genres[0].name,
        type: all.type,
        episodes: all.episodes,
        duration: all.duration,
        studio: all.studios[0].name,
        year: all.aired.prop.from.year,
        image: all.images.jpg.image_url,
    };
    console.log(aniData)

    try {

        const Anidatabase = await fetch(`${API_URL}`)
            .then(response => response.json())
            .then(database => {
                return database.map(element => element.mal_id);
            })
            .catch(error => {
                console.log(error);
            });

        if (Anidatabase.includes(aniData.mal_id)) {
            alert("This anime is alredy added in database.");
            return;
        }

        const res = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(aniData),
        });

        const data = await res.json();

        if (!res.ok) {
            console.log(data);
            return;
        }
        console.log(data);
    } catch (error){
        console.log(error);
    }
    alert("Anime added to database");
}
