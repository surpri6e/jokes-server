import { Request } from 'express';

export interface IJoke {
    id: number;
    user_id: number;
    created_at: string;

    name: string;
    text: string;
    author: string;

    number_of_likes: number;

    is_admin_accessed: boolean;
}

export type TJokeWithoutId = Omit<IJoke, 'id'>;

// CONTROLLER | START
interface IJokeQueryParams {
    user_id?: number;
    name?: string;
    author?: string;
}

export type TOfferJokeRequest = Request<any, any, TJokeWithoutId>;
export type TGetJokeByIdRequest = Request<{ id: number }>;
export type TGetJokesByRequest = Request<any, any, any, IJokeQueryParams>;
// CONTROLLER | END
