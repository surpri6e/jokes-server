namespace NodeJS {
    export interface ProcessEnv {
        DATABASE_USER: string | undefined;
        DATABASE_PASSWORD: string | undefined;
        DATABASE_HOST: string | undefined;
        DATABASE_PORT: string | undefined;
        DATABASE_NAME: string | undefined;

        SERVER_PORT: string | undefined;

        IS_DEBUG: string | undefined;
    }
}
