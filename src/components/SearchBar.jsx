
import React, { useState } from 'react';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query) {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/restaurants/search/city?query=${query}`); // Adjust API endpoint as needed
                // const response = await axios.get(`/api/restaurants/search?query=${query}`); // Adjust API endpoint as needed
                onSearch(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                placeholder="Search restaurants or food..."
                value={query}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;