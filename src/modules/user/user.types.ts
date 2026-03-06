import { Request } from 'express';

export interface IUser {
    id: number;
    created_at: string;

    username: string;

    number_of_jokes: number;
    number_of_likes: number;

    is_banned: boolean;
}

// CONTROLLER | START
export type TRegistrationUserRequest = Request<any, any, IUser>;
export type TGetUserByIdRequest = Request<{ id: number }>;
// CONTROLLER | END
