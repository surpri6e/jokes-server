import { Request, Response } from 'express';
import { DB } from '../../constants/db.constants';
import { IUser, TGetUserByIdRequest, TRegistrationUserRequest } from './user.types';
import { FromDatabaseError } from '../../utils/fromDatabaseError';
import { ALREADY_EXISTENT_ID, ERROR_BODIES_FOR_USER_MODULE, NON_EXISTENT_ID, sendErrorResponse } from './user.errors';
import { IQueryResponse } from '../../types/IQueryResponse.types';

export class UserController {
    static async getUserById(req: TGetUserByIdRequest, res: Response) {
        try {
            const userId = req.params.id;
            const data = await DB.query<IUser>('SELECT * FROM users WHERE id=$1', [userId]);

            if (data.rows.length === 0) {
                throw new FromDatabaseError(NON_EXISTENT_ID, ERROR_BODIES_FOR_USER_MODULE.NON_EXISTENT_ID);
            }

            const user = data.rows[0];

            // Продекомпозировать в будущем
            const queryResponse: IQueryResponse<IUser> = {
                type: 'good',
                body: user,
                clue: 'Зачем подсказки, если всё отработало отлично.',
                message: 'Всё отработало отлично.',
                status: 200,
            };

            res.status(queryResponse.status).json(queryResponse);
        } catch (err) {
            // Продекомпозировать в будущем
            console.log(err);

            if (err instanceof FromDatabaseError) {
                sendErrorResponse(err, res);
            } else {
                res.status(500).json('Unhandled error.');
            }
        }
    }

    static async registrationUser(req: TRegistrationUserRequest, res: Response) {
        try {
            const user = req.body;

            const alreadyExistentData = await DB.query<IUser>('SELECT * FROM users WHERE id=$1', [user.id]);

            if (alreadyExistentData.rows.length !== 0) {
                throw new FromDatabaseError(ALREADY_EXISTENT_ID, ERROR_BODIES_FOR_USER_MODULE.ALREADY_EXISTENT_ID);
            }

            await DB.query('INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6)', [
                user.id,
                user.createdAt,
                user.username,
                user.numberOfJokes,
                user.numberOfLikes,
                user.isBanned,
            ]);

            // Продекомпозировать в будущем
            const queryResponse: IQueryResponse<null> = {
                type: 'good',
                body: null,
                clue: 'Зачем подсказки, если всё отработало отлично.',
                message: 'Новый пользователь успешно создан',
                status: 200,
            };

            res.status(queryResponse.status).json(queryResponse);
        } catch (err) {
            // Продекомпозировать в будущем
            console.log(err);

            if (err instanceof FromDatabaseError) {
                sendErrorResponse(err, res);
            } else {
                res.status(500).json('Unhandled error.');
            }
        }
    }
}
