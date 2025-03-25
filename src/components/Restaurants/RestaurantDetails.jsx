import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [weather, setWeather] = useState(null);
    const[city, setCity] = useState (null)

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/restaurants/${id}`);
                console.log(response.data)
                setRestaurant(response.data.restaurant);
                setCity(response.data.restaurant.city)
               
            } catch (error) {
                console.error('Error fetching restaurant details or weather:', error);
            }
        };
        fetchRestaurantDetails();
    }, [id]);

    useEffect(()=> {
        const getweather = async () => {
            try {
                
                 // Fetching weather data using OpenWeatherMap API
                 const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`);
                 setWeather(weatherResponse.data);

            } catch (error) {

                console.log(error)
            }

        }
        getweather()
    }, [city]);

    if (!restaurant) return <div>Loading...</div>;

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone}</p>
            <p>{restaurant.openingHours}</p>
            <p>{restaurant.specialOffers}</p>
            <p>{restaurant.description}</p>
            {weather && (
                <div>
                    <h3>Weather Information</h3>
                    <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default RestaurantDetails;