import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx';
import Register from './components/Auth/Register.jsx';
import Login from './components/Auth/Login.jsx';
import RestaurantList from './components/Restaurants/RestaurantList.jsx';
import RestaurantDetails from './components/Restaurants/RestaurantDetails.jsx';
import CreateOrder from './components/Orders/CreateOrder.jsx';
import OrderStatus from './components/Orders/OrderStatus.jsx';
import SearchBar from './components/SearchBar'; 

function App() {
    const [searchResults, setSearchResults] = useState([]); // This storing search results

    const handleSearchResults = (results) => {
        setSearchResults(results); // This Update results based on search
    };

    return (
        <Router>
            <Header />
            <div className="container">
                <SearchBar onSearch={handleSearchResults} /> {/* Include the SearchBar here */}
                <Routes>
                    <Route path="/" element={<RestaurantList searchResults={searchResults} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/restaurants/:id" element={<RestaurantDetails />} />
                    <Route path="/order/create" element={<CreateOrder />} />
                    <Route path="/order/:id" element={<OrderStatus />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;