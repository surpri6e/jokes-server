import { Response } from 'express';
import { DatabaseError } from './errors/databaseError';
import { IQueryResponse } from '../types/IQueryResponse.types';
import { QueryParamsError } from './errors/queryParamsError';
import { ControllerError } from './errors/controllerError';

export function sendErrorResponse(res: Response, err: unknown) {
    console.log(err);

    if (err instanceof DatabaseError) {
        const errorResponse: IQueryResponse<null> = {
            ...err.body,
            type: 'error',
            body: null,
        };

        res.status(errorResponse.status).json(errorResponse);

        return;
    }

    if (err instanceof QueryParamsError) {
        const errorResponse: IQueryResponse<null> = {
            message: err.message,
            clue: '',
            status: 500,
            type: 'error',
            body: null,
        };

        res.status(errorResponse.status).json(errorResponse);

        return;
    }

    if (err instanceof ControllerError || err instanceof Error) {
        const errorResponse: IQueryResponse<null> = {
            message: err.message,
            clue: '',
            status: 500,
            type: 'error',
            body: null,
        };

        res.status(errorResponse.status).json(errorResponse);

        return;
    }
}

export function sendGoodResponse<T>(res: Response, message: string, body: T) {
    const goodResponse: IQueryResponse<T> = {
        type: 'good',
        body,
        clue: 'Зачем подсказки, если всё отработало отлично.',
        message,
        status: 200,
    };

    res.status(goodResponse.status).json(goodResponse);
}
