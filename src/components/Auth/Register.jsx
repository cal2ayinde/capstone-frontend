import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:4000/api/auth/register', {
            username,
            email,
            password,
            address,
            role: "customer"
        })
        .then(response => {
            alert(response.data.message);
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                <input type="text" placeholder="Address" onChange={e => setAddress(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;