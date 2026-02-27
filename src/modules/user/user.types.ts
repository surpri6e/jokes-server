import { Request } from 'express';

export interface IUser {
    id: number;

    createdAt: string;
    username: string;

    numberOfJokes: number;
    numberOfLikes: number;

    isBanned: boolean;
}

export type TRegistrationUserRequest = Request<any, any, IUser>;
export type TGetUserByIdRequest = Request<{ id: string }>;
