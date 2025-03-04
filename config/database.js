const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres'); // Changed default to 'postgres'

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'), // Added connection string support
        host: env('DATABASE_HOST', 'db.echaztkklwfbiqxspwel.supabase.co'), // Supabase Host
        port: env.int('DATABASE_PORT', 5432), // Supabase Port
        database: env('DATABASE_NAME', 'postgres'), // Supabase Database Name
        user: env('DATABASE_USERNAME', 'postgres'), // Supabase Username
        password: env('DATABASE_PASSWORD', 'dsjkdfsjK12ekj42349vjkfgqlkq`1`2'), // Supabase Password
        ssl: env.bool('DATABASE_SSL', true) && { rejectUnauthorized: false }, // Supabase requires SSL
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
