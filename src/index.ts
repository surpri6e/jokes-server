import express from 'express';
import { userRoutes } from './modules/user/user.routes';
import { ENV_CONFIG } from './utils/constants/envConfig.constants';
import { jokeRoutes } from './modules/joke/joke.routes';

const app = express();

app.use(express.json());
app.use('/', userRoutes);
app.use('/', jokeRoutes);

if (ENV_CONFIG.IS_DEBUG) {
    app.listen(ENV_CONFIG.SERVER_PORT, () => {
        console.log('It is debug version.');
        console.log(`Server was started on ${ENV_CONFIG.SERVER_PORT} port.`);
    });
} else {
    app.listen(ENV_CONFIG.SERVER_PORT);
}
