import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RestaurantDetails() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/restaurants/${id}`)
            .then(response => {
                setRestaurant(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurant details:', error);
            });
    }, [id]);

    if (!restaurant) return <div>Loading...</div>;

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone}</p>
            <p>{restaurant.openingHours}</p>
            <p>{restaurant.specialOffers}</p>
            <p>{restaurant.description}</p>
        </div>
    );
}

export default RestaurantDetails;