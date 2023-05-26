# Social network API

An API using mongoose which is structured for a basic social network website.

## Table of Contents

- [Installation](#installation)
- [API Routes](#api-routes)
- [License](#license)
- [Demo](#demo)

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Seed database: `npm run seed`
4. Configure environment variables (DB_NAME, DB_HOST, DB_PORT)
5. Start the server: `npm start`

## API Routes

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID
- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user

### Thoughts

- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get a specific thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:id` - Update a thought by ID
- `DELETE /api/thoughts/:id` - Delete a thought by ID
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions` - Remove a reaction from a thought

## License

This project is licensed under the [MIT License](LICENSE).

## Demo

[Video](https://www.youtube.com/watch?v=46c5ufsVdHQ)