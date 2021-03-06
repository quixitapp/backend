// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST || '',
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD || '',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  testing: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.HEROKU_POSTGRESQL_YELLOW_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
