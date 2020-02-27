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


## Endpoints

#### Authorization

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| POST    | `/api/register` | all users      | Creates a new User and logs them in. |
| POST   | `/api/login` | all users      | Logs a returning User in |

#### Users 

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| GET    | `/api/users` | all users      | Returns all users. |
| GET   | `/api/users/:id` | all users      | Returns the User with specified id. |
| PUT    | `/api/users/:id` | anyone  | Updates the User with specified id. |

#### Projects

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| GET    | `/api/projects` | all users      | Returns all Projects. |
| GET   | `/api/projects/:id` | all users      | Returns the Project with specified id. |
| PUT    | `/api/projects/:id` | anyone  | Updates the Project with specified id. |
| POST    | `/api/projects` | all users      | Creates a new Project. |
| DELETE    | `/api/projects/:id` | all users      | Deletes the project with specified id. |

#### Invoices

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| GET    | `/api/invoices` | all users      | Returns all Invoices. |
| GET   | `/api/invoices/:id` | all users      | Returns the Invoice with specified id. |
| GET    | `/api/invoices/projects/:id` | anyone  |Returns all Invoices tied to the specified project id. |
| POST    | `/api/invoices` | all users      | Creates a new Invoice. |

## Data Model

#### Users

```
{
  uid: UUID
  stripe_id: STRING
  payout_id: STRING
  firstName: STRING
  lastName: STRING
  avatar: STRING
  nickname: STRING
  email: STRING
  isContractor: BOOLEAN
  address: STRING
  phone: STRING
  category: STRING
  isBoarded: BOOLEAN
  balance: INTEGER
}
```
#### Services

```
service_name: String
```

#### Projects

```
{
  id: UUID
  homeowner_id: INTEGER
  project_title: STRING
  description: STRING
  material_included: BOOLEAN
  is_active: BOOLEAN
  budget: INTEGER
  category: STRING
  created_at: TIMESTAMP
}
```

#### Bids

```
{
  id: UUID
  project_id: INTEGER
  price: INTEGER
  duration: INTEGER
  material_included: BOOLEAN
  is_accepted: BOOLEAN
  budget: INTEGER
  created_at: TIMESTAMP
}
```

#### Project Images

```
{
  id: UUID
  project_id: INTEGER
  image: String
  created_at: TIMESTAMP
}
```
#### Project Agreement

```
{
  project_id: INTEGER
  contractor_id: INTEGER
  created_at: TIMESTAMP
}
```

#### Feedback

```
{
  id: UUID
  contractor_id: INTEGER
  reviewer_name: STRING
  feedback_title: STRING
  description: STRING
  rating: INTEGER
  recommend: BOOLEAN
  created_at: TIMESTAMP
}
```

#### Invoices

```
{
  id: UUID
  contractor_id: INTEGER
  amount: INTEGER
  feedback_title: STRING
  paid_at: TIMESTAMP
  created_at: TIMESTAMP
}
```