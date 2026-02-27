import { Response } from 'express';
import { IQueryResponse } from '../../types/IQueryResponse.types';
import { FromDatabaseError, IFromDatabaseErrorBodyConstructor } from '../../utils/fromDatabaseError';

export const NON_EXISTENT_ID = 'Пользователя с таким id не существует.';
export const ALREADY_EXISTENT_ID = 'Пользователь с таким id уже существует.';

interface ErrorBodiesForUserModule {
    NON_EXISTENT_ID: IFromDatabaseErrorBodyConstructor;
    ALREADY_EXISTENT_ID: IFromDatabaseErrorBodyConstructor;
}

export const ERROR_BODIES_FOR_USER_MODULE: ErrorBodiesForUserModule = {
    NON_EXISTENT_ID: {
        clue: 'Попробуйте пересмотреть id, который вы передаёте в функцию.',
        status: 500,
    },
    ALREADY_EXISTENT_ID: {
        clue: 'Возможно информация о том, что пользователь уже существует пригодится для других обработчиков.',
        status: 500,
    },
} as const;

export function sendErrorResponse(err: FromDatabaseError, res: Response) {
    const queryResponse: IQueryResponse<null> = {
        ...err.body,
        type: 'error',
        body: null,
    };

    res.status(queryResponse.status).json(queryResponse);
}
