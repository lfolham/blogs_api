📝 Task
- In this project, I developed an API and a database for content production in a blog. I used Node.js and the Sequelize ORM to perform CRUD operations on the posts.
- The endpoints were connected to the database, following the principles of REST. To create a post, it is necessary to have an authenticated user with JWT. Authentication is done through tokens, which are validated in requests that require authentication.

📄 API Documentation
- Method Endpoint Description Authentication Requirements
- POST /login Performs user login N/A
- POST /user Adds a new user N/A
- GET /user Returns all users Authentication token
- GET /user/:id Returns a specific user Authentication token
- POST /categories Adds a new category Authentication token
- GET /categories Returns all categories Authentication token
- POST /post Adds a new post and links it to categories Authentication token
- GET /post Returns all posts Authentication token
- GET /post/:id Returns a specific post Authentication token
- PUT /post/:id Updates an existing post Authentication token
- DELETE /post/:id Deletes an existing post Authentication token
- DELETE /user/me Deletes the logged-in user Authentication token
- GET /post/search?q=term Returns posts that match the search term Authentication token

💡 Stacks Used
Programming Language: JavaScript
Development Framework: Express
Database: MySQL
ORM (Object-Relational Mapping): Sequelize
Static Code Analysis Tool: ESLint
Code Formatting Tool: Prettier
