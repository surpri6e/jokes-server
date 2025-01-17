import express from 'express';
import { jokesRoutes } from './modules/jokes/jokes.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/jokes', jokesRoutes);

app.listen(process.env.APPLICATION_PORT);
