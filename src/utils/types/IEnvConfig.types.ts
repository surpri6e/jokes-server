export interface IEnvConfig {
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_NAME: string;

    SERVER_PORT: number;

    IS_DEBUG: boolean;

    X_APP_KEY: string;
}
