# Thoughtflow - Blog Application

## Project Description

Thoughtflow is a full-stack blog application that allows users to create, read, update, and delete blog posts. The application is built using Node.js and Express on the backend, with a MongoDB database for data storage, and a React frontend for the user interface.

## Features

### Backend (Node.js with Express)

- Set up a RESTful API with the following endpoints:
  - `GET /posts`: List all blog posts
  - `GET /posts/:id`: Retrieve a specific blog post
  - `POST /posts`: Create a new blog post
  - `PUT /posts/:id`: Update an existing blog post
  - `DELETE /posts/:id`: Delete a blog post
- Implement basic error handling and input validation.
- Use MongoDB as the database to store blog posts.

### Frontend (React)

- Responsive layout with a header, main content area, and footer.
- List view displaying blog post titles and excerpts.
- Detail view for individual blog posts.
- Form to add new blog posts with client-side form validation.
- Full stack integration connecting the frontend to the backend API.
- Proper error handling and loading states on the frontend.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/Athesh007/ThoughtFlow.git

   ```

2. Install dependencies

   ```bash
   cd backend
   npm Install

   ```

3. create .env file

   ```bash
   MONGODB_URI= *****
   JWT_SECRET_KEY=*****

   ```

4. Run Backend
   ```bash
   node index.js
   ```

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/Athesh007/ThoughtFlow.git

   ```

2. Install dependencies

   ```bash
   cd frontend
   npm Install

   ```

3. create .env file

   ```bash
   VITE_CONNECTIVITY = "http://localhost:3000"

   ```

4. Run Backend
   ```bash
   npm run dev
   ```
