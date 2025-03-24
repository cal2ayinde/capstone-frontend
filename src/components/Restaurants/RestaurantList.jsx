import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({ searchResults }) => {
    
    const {restaurants} = searchResults
    return (
        <div>
            <h2>Restaurants</h2>
            <ul>
    
                {restaurants && restaurants.length > 0 ? (
                    restaurants.map(restaurant => (
                        <li key={restaurant._id}>
                            <h3>
                                <Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link>
                            </h3>
                            <p>{restaurant.address}</p>
                        </li>
                    ))
                ) : (
                    <p>No results found.</p> // Display message if no restaurants found
                )}
            </ul>
        </div>
    );
};

export default RestaurantList;