import React, { useState, useEffect } from 'react';

import CardDetail from './CardDetail';

const API_URL = 'http://localhost:3000/anidb';

function AniManager() {

    const [Ani, setAni] = useState(null);

    useEffect(() => {

        fetch(API_URL)
            .then(response => response.ok && response.json())
            .then(data => setAni(data))
            .catch(error => console.error(error));

    }, []);

    const handleSell = (id) => {

        fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.ok && (
                setAni(cars => cars.filter(car => car.id !== id))
            ))
            .catch(error => console.error(error));

    }

    const handleAdd = (newCar) => {
        fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCar)
        })
            .then(response => response.ok && response.json())
            .then(data => setAni(ani => [...ani, data]))
            .catch(error => console.error(error));
    }


}

export default AniManager;