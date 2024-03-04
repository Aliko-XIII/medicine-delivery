const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '95493',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'medicine_delivery_db'
});

export default (text, params) => pool.query(text, params);