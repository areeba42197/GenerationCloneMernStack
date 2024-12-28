# Generation Clothing Brand Clone

A fully functional and responsive clone of the "Generation Clothing brand" website built with modern web technologies. This project showcases a visually appealing frontend design, a robust backend, and seamless database integration for handling user interactions and product data.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)


---

## Overview
This project aims to replicate the design and functionality of the official Generation Clothing brand website. The clone includes features like product listing, user authentication, shopping cart management, and more. It serves as a portfolio project to demonstrate web development and full-stack development skills.

---

## Features
- **Responsive Design**: Works seamlessly on all devices (desktop, tablet, and mobile).
- **User Authentication**: Registration, login, and logout functionality.
- **Product Management**: Display of product categories, filtering, and search functionality.
- **Shopping Cart**: Add, update, and remove items from the cart.
- **Dynamic Backend**: Real-time data fetching and rendering.
- **API Integration**: Integration of RESTful APIs for backend communication.

---

## Tech Stack

### Frontend:
- React.js
- HTML5 & CSS3
- JavaScript
- Bootstrap

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB

### Other Tools:
- Axios
- Nodemon
- Concurrently

---

## Installation

### Prerequisites:
- Node.js installed
- MongoDB running locally or a MongoDB Atlas account

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/areeba42197/GenerationCloneMernStack.git


   ```
2. Navigate to the project directory:
   ```bash
   cd generation-clothing-clone
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   npm install
   cd client && npm install
   cd ..
   ```
4. Set up your environment variables in a `.env` file:
   ```
   PORT=8080
   MONGO_URI=your_mongo_database_url
   JWT_SECRET=your_secret_key
   ```
5. Start the application:
   ```bash
   npm run dev
   ```

---

## Usage
1. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
2. Register or login to explore the features.
3. Browse products, add them to your cart, and simulate a purchase.

---
## Acknowledgments
- **Generation**: For the inspiration and original design.
- **Open Source Libraries**: For providing tools and frameworks to build this project.
