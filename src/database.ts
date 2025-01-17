import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const databasePool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
});

console.log(process.env.DATABASE_PORT, process.env.DATABASE_NAME);
