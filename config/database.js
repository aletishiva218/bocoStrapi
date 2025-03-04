module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: { rejectUnauthorized: false }, // Ensure SSL is properly handled
    },
    pool: { min: 2, max: 10 },
  },
});
