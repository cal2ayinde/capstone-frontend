# Capstone Project: Food Delivery Application

## Description
This is a food delivery application allowing users to register, login, view restaurants by location, and place orders.

## Features
- User Authentication (Register/Login)
- Role Management (customer, restaurant owner, admin)
- Restaurant Search by ZIP code or city
- Create, Update, Delete Orders

## Installation Instructions
1. Clone this repository.
2. Install dependencies using: `npm install`
3. Configure your MongoDB URI in the `.env` file.
4. Start the server: `npm run dev`

## API Endpoints
- `POST /api/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user
- `GET /api/restaurants/search` - Search for restaurants
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order status
- `PUT /api/orders/:id` - Update an existing order
- `DELETE /api/orders/:id` - Delete an order

## Testing with Postman
Use the following endpoints to test the application:
- Register User: `POST http://localhost:4000/api/auth/register`
- Login User: `POST http://localhost:4000/api/auth/login`
- Search Restaurants: `GET http://localhost:4000/api/restaurants/search?zipcode=12345`
- Create Order: `POST http://localhost:4000/api/orders`
- Get Order: `GET http://localhost:4000/api/orders/:id`
- Update Order: `PUT http://localhost:4000/api/orders/:id`
- Delete Order: `DELETE http://localhost:4000/api/orders/:id`