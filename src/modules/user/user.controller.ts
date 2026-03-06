import { Response } from 'express';
import { DB } from '../../utils/constants/db.constants';
import { TGetUserByIdRequest, TRegistrationUserRequest } from './user.types';
import { ENV_CONFIG } from '../../utils/constants/envConfig.constants';
import { Pool } from 'pg';
import { UserService } from './user.service';
import { ControllerError } from '../../utils/functionals/errors/controllerError';
import { sendErrorResponse, sendGoodResponse } from '../../utils/functionals/sendResponses';
import { GOOD_RESPONSE_MESSAGE_GET_USER_BY_ID, GOOD_RESPONSE_MESSAGE_REGISTRATION_USER } from './user.constants';

interface IUserControllerRealization {
    getUserById: (req: TGetUserByIdRequest, res: Response) => Promise<void>;
    registrationUser: (req: TRegistrationUserRequest, res: Response) => Promise<void>;
}

export class UserController implements IUserControllerRealization {
    private static m_instance: UserController;

    // Dependencies?
    private readonly m_dbConnection: Pool;

    private readonly m_userService: UserService;

    constructor(dbConnection: Pool) {
        if (UserController.m_instance) {
            throw new ControllerError();
        }

        this.m_dbConnection = dbConnection;

        this.m_userService = new UserService(this.m_dbConnection);
        UserController.m_instance = this;
    }

    public static readonly getInstance = () => {
        return UserController.m_instance;
    };

    public readonly getUserById = async (req: TGetUserByIdRequest, res: Response) => {
        try {
            const user = await this.m_userService.getUserById(req.params.id);

            sendGoodResponse(res, GOOD_RESPONSE_MESSAGE_GET_USER_BY_ID, user);
        } catch (err) {
            sendErrorResponse(res, err);
        }
    };

    public readonly registrationUser = async (req: TRegistrationUserRequest, res: Response) => {
        try {
            await this.m_userService.registrationUser(req.body);

            sendGoodResponse(res, GOOD_RESPONSE_MESSAGE_REGISTRATION_USER, null);
        } catch (err) {
            sendErrorResponse(res, err);
        }
    };
}

if (ENV_CONFIG.IS_DEBUG) {
    // Dependencies injection?
    new UserController(DB);
}
