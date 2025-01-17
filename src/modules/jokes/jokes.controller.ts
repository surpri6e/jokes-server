import { Request, Response } from 'express';
import { databasePool } from '../../database';

export class JokesController {
    static async getJokeOfTheDay(req: Request, res: Response) {
        console.log(req.query);
        res.json(1);
        console.log(1);
    }

    static async getJokesByText(req: Request, res: any) {
        console.log(1);
    }

    static async getJokesByAuthor(req: any, res: any) {
        console.log(1);
    }

    static async getJokesByName(req: any, res: any) {
        console.log(1);
    }

    static async getJokeById(req: any, res: any) {
        console.log(1);
    }

    static async offerJoke(req: any, res: any) {
        const data = await databasePool.query(
            'INSERT INTO notAdminAccessedJokes (text, dateOfCreate, author, adminAccess, rating, name, linkOnImage) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            ['Cool', '20.12.24', 'sur', true, 5, 'chel', null],
        );

        console.log(data);
    }

    static async accessJoke(req: any, res: any) {
        console.log(1);
    }
}
