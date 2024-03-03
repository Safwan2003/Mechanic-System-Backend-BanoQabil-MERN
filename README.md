Mechanic System Backend
This is the backend for the Mechanic System, which provides APIs for user authentication, user management, admin operations, and mechanic functionalities.

Table of Contents
Getting Started
API Documentation
Dependencies
Usage
Contributing
License
Getting Started
To get started with the Mechanic System backend, follow these steps:

Clone this repository.
Install dependencies using npm install.
Set up environment variables by creating a .env file and adding necessary configurations. Refer to .env.example for required variables.
Ensure MongoDB is running, and update the MongoDB connection URL in the .env file.
Run the server using npm start or npm run dev for development with nodemon.
API Documentation
API documentation for the Mechanic System backend is available using Swagger UI. After starting the server, visit /api-docs endpoint to explore the API documentation.

Dependencies
The backend utilizes various dependencies to function properly. Some of the key dependencies include:

Express: Fast, unopinionated, minimalist web framework for Node.js.
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
Swagger UI Express: Middleware to serve auto-generated API documentation using Swagger UI.
bcryptjs: Library for hashing passwords.
jsonwebtoken: Implementation of JSON Web Tokens for user authentication.
dotenv: Module to load environment variables from a .env file.
cors: Middleware to enable Cross-Origin Resource Sharing (CORS) in Express.js.
For a full list of dependencies, refer to package.json file.

Usage
Once the server is running, you can interact with the Mechanic System backend using various endpoints provided by the API. Here are some of the main endpoints:

/api/auth: Endpoint for user authentication.
/api/user: Endpoint for user management operations.
/api/admin: Endpoint for admin operations.
/api/mechanic: Endpoint for mechanic functionalities.
Ensure to check the API documentation for detailed information on each endpoint and their respective request and response formats.

Contributing
Contributions to the Mechanic System backend are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the ISC License. See the LICENSE file for details.
