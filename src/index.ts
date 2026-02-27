import express from 'express';
import { userRoutes } from './modules/user/user.routes';
import { ENV_CONFIG } from './constants/envConfig.constants';

const app = express();

app.use(express.json());
app.use('/', userRoutes);

if (ENV_CONFIG.IS_DEBUG) {
    app.listen(ENV_CONFIG.SERVER_PORT, () => {
        console.log('It is debug version.');
        console.log(`Server was started on ${ENV_CONFIG.SERVER_PORT} port.`);
    });
} else {
    app.listen(ENV_CONFIG.SERVER_PORT);
}
