import { createPool } from 'mysql2/promise';

const connection = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testDatabase'
});

export default connection;