import React, { useState } from 'react';
import axios from 'axios';

function OrderStatus() {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState(null);

    function fetchStatus() {
        axios.get(`http://localhost:4000/api/orders/${orderId}`)
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => {
                console.error('Error fetching order status:', error);
            });
    }

    return (
        <div>
            <h2>Check Order Status</h2>
            <input type="text" placeholder="Order ID" onChange={e => setOrderId(e.target.value)} required />
            <button onClick={fetchStatus}>Check Status</button>
            {status && (
                <div>
                    <h3>Order Status</h3>
                    <p>{status.delivery_status}</p>
                </div>
            )}
        </div>
    );
}

export default OrderStatus;

