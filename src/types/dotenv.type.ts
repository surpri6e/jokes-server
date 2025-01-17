namespace NodeJS {
    export interface ProcessEnv {
        DATABASE_USER: string;
        DATABASE_PASSWORD: string;
        DATABASE_HOST: string;
        DATABASE_PORT: string;
        DATABASE_NAME: string;

        APPLICATION_PORT: string;
    }
}
