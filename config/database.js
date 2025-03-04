module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.ysscxwozzsnpbhdnipzm.supabase.co'),
      port: env('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'dsjkdfsjK12ekj42349vjkfgqlkq`1`2'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
        ca: env('DATABASE_SSL_CA', ''),
      },
    },
    debug: false,
  },
});