

export const AddAni=async(all)=>{

    const API_URL = 'http://localhost:3000/anidb';

    const aniData = {
        mal_id: all.mal_id,
        title: all.title,
        year: all.aired.prop.from.year
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
}