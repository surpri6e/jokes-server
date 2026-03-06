import { Pool } from 'pg';
import { IJoke, TJokeWithoutId } from './joke.types';
import {
    QUERY_STRING_GET_JOKE_BY_ID,
    QUERY_STRING_GET_JOKES_BY_AUTHOR,
    QUERY_STRING_GET_JOKES_BY_NAME,
    QUERY_STRING_GET_JOKES_BY_USER_ID,
    QUERY_STRING_OFFER_JOKE,
} from './joke.queries';
import { DatabaseError } from '../../utils/functionals/errors/databaseError';
import { ERROR_BODIES_FOR_JOKE_MODULE, NON_EXISTENT_JOKE } from './joke.errors';

interface IJokeServiceRealization {
    offerJoke: (joke: TJokeWithoutId) => Promise<void>;

    getJokesByName: (name: string) => Promise<IJoke[]>;
    getJokesByAuthor: (author: string) => Promise<IJoke[]>;
    getJokesByUserId: (userId: number) => Promise<IJoke[]>;

    getJokeById: (id: number) => Promise<IJoke>;
}

export class JokeService implements IJokeServiceRealization {
    // Dependencies
    private readonly m_dbConnection: Pool;

    constructor(dbConnection: Pool) {
        this.m_dbConnection = dbConnection;
    }

    public readonly offerJoke = async (joke: TJokeWithoutId) => {
        await this.m_dbConnection.query(QUERY_STRING_OFFER_JOKE, [
            joke.user_id,
            joke.name,
            joke.text,
            joke.created_at,
            joke.author,
            joke.is_admin_accessed,
            joke.number_of_likes,
        ]);
    };

    public readonly getJokeById = async (id: number) => {
        const data = (await this.m_dbConnection.query(QUERY_STRING_GET_JOKE_BY_ID, [id])).rows;

        if (data.length === 0) {
            throw new DatabaseError(NON_EXISTENT_JOKE, ERROR_BODIES_FOR_JOKE_MODULE.NON_EXISTENT_JOKE);
        }

        return data[0];
    };

    // Do custom error handler
    public readonly getJokesByAuthor = async (author: string) => {
        return (await this.m_dbConnection.query(QUERY_STRING_GET_JOKES_BY_AUTHOR, [author])).rows;
    };

    // Do custom error handler
    public readonly getJokesByName = async (name: string) => {
        return (await this.m_dbConnection.query(QUERY_STRING_GET_JOKES_BY_NAME, [name])).rows;
    };

    // Do custom error handler
    public readonly getJokesByUserId = async (userId: number) => {
        return (await this.m_dbConnection.query(QUERY_STRING_GET_JOKES_BY_USER_ID, [userId])).rows;
    };
}
