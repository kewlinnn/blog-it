# BLOGIT
BLOGIT is a simple blogging platform built with Node.js, Express, and EJS. It allows users to create, view, edit, and delete blog posts. This application serves as a backend project for managing blog posts, with basic CRUD (Create, Read, Update, Delete) functionality.

## Features
- Create blog posts: Users can create new blog posts via a form.
- View blog posts: Users can view individual blog posts.
- Edit blog posts: Users can edit the content of their blog posts.
- Delete blog posts: Users can delete their blog posts with a confirmation prompt to prevent accidental deletions.
- List all blog posts: The homepage displays a list of all blog posts.

## Tech Stack
- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- EJS: Templating engine for rendering HTML views.
- Body-Parser: Middleware for parsing incoming request bodies.

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
  ```bash
    git clone https://github.com/kewlinnn/blog-it.git
  ```

2. Navigate into the project directory:
  ```bash
    cd blogit
  ```

3. Install the dependencies:
  ```bash
    npm install
  ```

4. Run the application:
  ```bash
    npm start
  ```

5. Now, open your browser and navigate to:
   ```arduino
   http://localhost:3000
   ```

## Routes
- GET /: Displays a list of all blog posts.
- GET /create: Displays the form to create a new blog post.
- POST /submit: Handles form submission for creating a new blog post.
- GET /blog/:id: Displays an individual blog post.
- GET /blog/:id/edit: Displays the form to edit a specific blog post.
- POST /blog/:id/edit/submit: Handles form submission to update an existing blog post.
- POST /blog/:id/delete: Handles deletion of a specific blog post with a confirmation prompt.

## Folder Structure
```bash
/blogit
│
├── /public            # Static files (CSS, images, etc.)
│
├── /views             # EJS templates (layouts and partials)
│   ├── /partials      # Partial views (e.g., header, footer)
│   ├── index.ejs      # Home page displaying all blog posts
│   ├── create.ejs     # Form to create a new blog post
│   ├── blog.ejs       # Page displaying an individual blog post
│   ├── edit.ejs       # Form to edit an existing blog post
│
├── index.js             # Main server file (entry point)
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Known Issues
- There is no persistent database, so the blog posts will not be saved after the server is restarted.
- There is no authentication implemented, so anyone can create, edit, or delete posts.

## Future Enhancements
- User Authentication: Implement login and user registration features to allow users to manage their own posts.
- Database Integration: Use a database (e.g., MongoDB, MySQL) to persist blog posts.
- Search Functionality: Add the ability to search for blog posts by title or author.
- Comment System: Allow users to comment on blog posts.

## Current Status
This project is still in development and is not finished. While the basic functionality for creating, viewing, editing, and deleting blog posts is in place, some parts may not work as intended. There are also several enhancements planned for the future, such as user authentication, database integration, and more.