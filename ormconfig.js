module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.{js,ts}"],
  migrations: ["src/migrations/**/*.{js,ts}"],
  subscribers: ["src/subscribers/**/*.{js,ts}"],

  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
    subscribersDir: "src/subscribers",
  },
};
