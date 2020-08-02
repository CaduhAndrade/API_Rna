const { Pool } = require('pg');
const conn = require('./connection');

const pool = new Pool({
  connectionString: conn.getConnectionString(),
});

pool.on('connect', () => {
  console.log('Base de dados conectada com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
