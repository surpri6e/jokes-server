import Route from 'express';
import { JokesController } from './jokes.controller';
export const jokesRoutes = Route();

jokesRoutes.get('/one_of_the_day', JokesController.getJokeOfTheDay);

jokesRoutes.get('/by_text', JokesController.getJokesByText);
jokesRoutes.get('/by_author', JokesController.getJokesByAuthor);
jokesRoutes.get('/by_name', JokesController.getJokesByName);

jokesRoutes.get('/one_by_id', JokesController.getJokeById);

jokesRoutes.post('/one_offer', JokesController.offerJoke);
jokesRoutes.post('/one_access', JokesController.accessJoke);
