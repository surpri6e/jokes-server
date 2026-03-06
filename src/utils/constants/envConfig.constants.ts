import { IEnvConfig } from '../types/IEnvConfig.types';
import dotenv from 'dotenv';

dotenv.config();

export const ENV_CONFIG: IEnvConfig = {
    DATABASE_HOST: process.env.DATABASE_HOST ? process.env.DATABASE_HOST : '',
    DATABASE_NAME: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : '',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : '',
    DATABASE_PORT: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 0,
    DATABASE_USER: process.env.DATABASE_USER ? process.env.DATABASE_USER : '',

    SERVER_PORT: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 0,

    IS_DEBUG: process.env.IS_DEBUG && Number(process.env.IS_DEBUG) === 1 ? true : false,

    X_APP_KEY: process.env.X_APP_KEY ? process.env.X_APP_KEY : '',
} as const;
