import React, { useState } from 'react';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function CreateOrder() {
    const [restaurantId, setRestaurantId] = useState(''); // State for restaurant ID
    const [products, setProducts] = useState([{ productId: '', quantity: 1 }]); // State for products list
    const [totalAmount, setTotalAmount] = useState(0); // State for total amount of the order

    // Function to handle order submission
    function handleOrder(e) {
        e.preventDefault(); // Prevent default form submission
        // Send POST request to create an order
        axios.post(`${API_BASE_URL}/api/orders`, {
            restaurant: restaurantId,
            products,
            totalAmount
        })
        .then(response => {
            alert('Order created: ' + response.data._id); // Show success message
        })
        .catch(error => {
            console.error(error); // Log error
        });
    };

    // Function to update product information in products array
    function handleProductChange(index, event) {
        const values = [...products];
        values[index][event.target.name] = event.target.value; // Update specific product info
        setProducts(values); // Update state
    };

    // Function to add a new product input field
    function addProduct() {
        setProducts([...products, { productId: '', quantity: 1 }]); // Add new product field
    };

    return (
        <div>
            <h2>Create Order</h2>
            <form onSubmit={handleOrder}>
                <input type="text" placeholder="Restaurant ID" onChange={e => setRestaurantId(e.target.value)} required />
                {products.map((product, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="productId"
                            placeholder="Product ID"
                            value={product.productId}
                            onChange={event => handleProductChange(index, event)}
                            required
                        />
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity"
                            value={product.quantity}
                            onChange={event => handleProductChange(index, event)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addProduct}>Add Product</button>
                <input type="number" placeholder="Total Amount" onChange={e => setTotalAmount(e.target.value)} required />
                <button type="submit">Create Order</button>
            </form>
        </div>
    );
}

export default CreateOrder;