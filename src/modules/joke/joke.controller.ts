import { Response } from 'express';
import { TGetJokeByIdRequest, TGetJokesByRequest, TOfferJokeRequest } from './joke.types';
import { JokeService } from './joke.service';
import { ENV_CONFIG } from '../../utils/constants/envConfig.constants';
import { ControllerError } from '../../utils/functionals/errors/controllerError';
import { UserService } from '../user/user.service';
import { Pool } from 'pg';
import { DB } from '../../utils/constants/db.constants';
import { sendErrorResponse, sendGoodResponse } from '../../utils/functionals/sendResponses';
import {
    GOOD_RESPONSE_MESSAGE_GET_JOKE_BY_ID,
    GOOD_RESPONSE_MESSAGE_GET_JOKES_BY_AUTHOR,
    GOOD_RESPONSE_MESSAGE_GET_JOKES_BY_NAME,
    GOOD_RESPONSE_MESSAGE_GET_JOKES_BY_USER_ID,
    GOOD_RESPONSE_MESSAGE_OFFER_JOKE,
} from './joke.constants';
import { QueryParamsError } from '../../utils/functionals/errors/queryParamsError';
import { controlAccess } from '../../utils/functionals/controlAccess';

interface IJokeControllerRealization {
    offerJoke: (req: TOfferJokeRequest, res: Response) => Promise<void>;
    getJokeById: (req: TGetJokeByIdRequest, res: Response) => Promise<void>;
    getJokesBy: (req: TGetJokesByRequest, res: Response) => Promise<void>;
}

export class JokeController implements IJokeControllerRealization {
    private static m_instance: JokeController;

    // Dependencies?
    private readonly m_dbConnection: Pool;

    private readonly m_jokeService: JokeService;
    private readonly m_userService: UserService;

    constructor(dbConnection: Pool) {
        if (JokeController.m_instance) {
            throw new ControllerError();
        }

        this.m_dbConnection = dbConnection;

        this.m_jokeService = new JokeService(this.m_dbConnection);
        this.m_userService = new UserService(this.m_dbConnection);
        JokeController.m_instance = this;
    }

    public static readonly getInstance = () => {
        return JokeController.m_instance;
    };

    public readonly offerJoke = async (req: TOfferJokeRequest, res: Response) => {
        try {
            controlAccess(req.headers['X-APP-KEY']);

            const joke = req.body;

            await this.m_dbConnection.query('BEGIN');

            await this.m_jokeService.offerJoke(joke);
            await this.m_userService.incrementNumberOfJokes(joke.user_id);

            await this.m_dbConnection.query('COMMIT');

            sendGoodResponse(res, GOOD_RESPONSE_MESSAGE_OFFER_JOKE, null);
        } catch (err) {
            await this.m_dbConnection.query('ROLLBACK');

            sendErrorResponse(res, err);
        }
    };

    public readonly getJokeById = async (req: TGetJokeByIdRequest, res: Response) => {
        try {
            controlAccess(req.headers['X-APP-KEY']);

            const id = req.params.id;

            const joke = await this.m_jokeService.getJokeById(id);

            sendGoodResponse(res, GOOD_RESPONSE_MESSAGE_GET_JOKE_BY_ID, joke);
        } catch (err) {
            sendErrorResponse(res, err);
        }
    };

    public readonly getJokesBy = async (req: TGetJokesByRequest, res: Response) => {
        try {
            controlAccess(req.headers['X-APP-KEY']);

            const queryParams = req.query;

            if (queryParams.user_id) {
                const jokes = await this.m_jokeService.getJokesByUserId(queryParams.user_id);
                sendGoodResponse(res, GOOD_RESPONSE_MESSAGE_GET_JOKES_BY_USER_ID, jokes);
                return;
            }

            if (queryParams.name) {
                const jokes = await this.m_jokeService.getJokesByName(queryParams.name);
                sendGoodResponse(res, GOOD_RESPONSE_MESSAGE_GET_JOKES_BY_NAME, jokes);
                return;
            }

            if (queryParams.author) {
                const jokes = await this.m_jokeService.getJokesByAuthor(queryParams.author);
                sendGoodResponse(res, GOOD_RESPONSE_MESSAGE_GET_JOKES_BY_AUTHOR, jokes);
                return;
            }

            throw new QueryParamsError();
        } catch (err) {
            sendErrorResponse(res, err);
        }
    };
}

if (ENV_CONFIG.IS_DEBUG) {
    // Dependencies injection?
    new JokeController(DB);
}
