import { Pool } from 'pg';
import { ENV_CONFIG } from './envConfig.constants';

export const DB = new Pool({
    user: ENV_CONFIG.DATABASE_USER,
    password: ENV_CONFIG.DATABASE_PASSWORD,
    host: ENV_CONFIG.DATABASE_HOST,
    port: ENV_CONFIG.DATABASE_PORT,
    database: ENV_CONFIG.DATABASE_NAME,
});
