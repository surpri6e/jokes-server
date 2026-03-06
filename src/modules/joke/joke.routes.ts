import Route from 'express';
import { JokeController } from './joke.controller';

export const jokeRoutes = Route();

const jokeController = JokeController.getInstance();

jokeRoutes.post('/joke', jokeController.offerJoke);

jokeRoutes.get('/joke/:id', jokeController.getJokeById);
jokeRoutes.get('/jokes', jokeController.getJokesBy);
