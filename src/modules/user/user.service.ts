import { Pool } from 'pg';
import { IUser } from './user.types';
import { ERROR_BODIES_FOR_USER_MODULE, NON_EXISTENT_USER } from './user.errors';
import { DatabaseError } from '../../utils/functionals/errors/databaseError';
import { QUERY_STRING_GET_USER_BY_ID, QUERY_STRING_INCREMENT_NUMBER_OF_JOKES, QUERY_STRING_REGISTRATION_USER } from './user.queries';

interface IUserServiceRealization {
    incrementNumberOfJokes: (id: number) => Promise<void>;
    getUserById: (id: number) => Promise<IUser>;
    registrationUser: (user: IUser) => Promise<void>;
}

export class UserService implements IUserServiceRealization {
    // Dependencies
    private readonly m_dbConnection: Pool;

    constructor(dbConnection: Pool) {
        this.m_dbConnection = dbConnection;
    }

    public readonly incrementNumberOfJokes = async (id: number) => {
        await this.m_dbConnection.query(QUERY_STRING_INCREMENT_NUMBER_OF_JOKES, [id]);
    };

    public readonly getUserById = async (id: number) => {
        const data = (await this.m_dbConnection.query(QUERY_STRING_GET_USER_BY_ID, [id])).rows;

        if (data.length === 0) {
            throw new DatabaseError(NON_EXISTENT_USER, ERROR_BODIES_FOR_USER_MODULE.NON_EXISTENT_USER);
        }

        return data[0];
    };

    public readonly registrationUser = async (user: IUser) => {
        // Do custom error handler
        await this.m_dbConnection.query(QUERY_STRING_REGISTRATION_USER, [
            user.id,
            user.created_at,
            user.username,
            user.number_of_jokes,
            user.number_of_likes,
            user.is_banned,
        ]);
    };
}
