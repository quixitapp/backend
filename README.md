# Quixit Backend


## Getting started

To get the server running locally:

- Clone this repo.
- `yarn install` to install all required dependencies.
- `yarn start` to start the local server.
- `yarn server` to start nodemon


## Backend Framework

Quixit is a Restful API build with [Node.js](https://nodejs.org/en/about/) and [Express.js](https://expressjs.com/) and uses a [PostgreSQL](https://www.postgresql.org/) database


#### Dependencies

- [Knex](https://www.npmjs.com/package/knex): SQL query builder for JavaScript, used to structure sql queries to our databases
- [Helmet](https://www.npmjs.com/package/helmet): Secures our Express app by setting various HTTP headers
- [CORS](https://www.npmjs.com/package/cors): Uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env
- [Nodemon](https://www.npmjs.com/package/nodemon): Allows the server to be restarted automatically upon file changes
- [Axios](https://www.npmjs.com/package/axios): A promise based HTTP client used to send requests
- [Firebase - Admin](https://www.npmjs.com/package/firebase-admin): A helper to configure Firebase Authentication
- [SQLite3](https://www.npmjs.com/package/sqlite3): Free and open-source relational database management system used in our development environment 
- [Jest](https://www.npmjs.com/package/jest): Sets global state while testing 
- [Morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware