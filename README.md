# AllPosts.com

## Overview

It is an assignment project for Advisoropedia.

## Technology Stack

### Backend

- **Node.js**
- **Express.js**: Web application framework
- **Database**: MongoDB
- **jsonwebtoken**: Library for JWT generation and validation

### Frontend

- **React.js**
- **Tailwind CSS**: For responsive design
- **Toastify**: For beautiful UI validations
- **Framer Motion**: For scrolling animation

## Project Structure

### Backend

- `/backend`: Backend server files
  - `/backend/routes`: Express.js route definitions
  - `/backend/controllers`: Logic for handling routes
  - `/backend/models`: Database models

### Frontend

- `/frontend`: React.js frontend files
  - `/frontend/src/components`: React components

## Features

### Signup Screen

- User registration with fields for username, email, password, and optional details.
- Form validation using React state management and libraries.
- Terms and conditions checkbox.
- Simulated welcome email notification upon successful signup.
- Redirects to the post list screen using React Router.

### Post List Screen

- Infinitely scrollable post feed with paginated data.
- Responsive design using Tailwind CSS.

### API Endpoints

#### `POST /signup`

- Registers a new user with username, email, and password.
- Validates input, ensures unique usernames and emails, securely hashes passwords.
- Stores user data in the database.
- Returns success message and JWT token upon successful registration.

#### `GET /posts`

- Paginated implementation for fetching posts data.
- Secure; non-authenticated requests are rejected.

### JWT Implementation

- Generates JWT tokens with payload and expiration upon successful login.
- Validates JWT tokens in protected routes for user authentication.
- Implements robust token refresh mechanisms.

## Best Practices

- Input validation and sanitization to prevent vulnerabilities.
- Protection using CORS
- Secure password storage using strong hashing algorithms.
- Proper error handling with informative messages.
- Clean, well-structured, and documented code.
- Use of environment variables for sensitive information.
- Effective token expiration management.

## Getting Started

1. Clone the repository: `git clone https://github.com/mananc12/Advisoropedia-AllPost.com-assignement.git`
2. Install dependencies for both backend and frontend: `npm install` in `/frontend` and `/backend`.
3. Set up your database and configure environment variables for backend.
```bash
MONGODB_URL = 
JWT_SECRET = 
JWT_TOKEN_EXPIRY = 
```
4. Run the project: `npm start` in `/frontend` and `node app.js` in `/backend`.
