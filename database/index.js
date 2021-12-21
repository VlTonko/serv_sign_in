const { Client } = require('pg');

const pgClient = new Client({
  user: 'vlad',
  host: 'localhost',
  database: 'postgres',
  password: '12061986',
  port: 5432,
});

pgClient.connect().then(() => console.log('CONNECT TO DB'));

module.exports = pgClient;
