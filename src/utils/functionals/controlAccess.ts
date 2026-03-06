import { ENV_CONFIG } from '../constants/envConfig.constants';

export function controlAccess(key: string | string[] | undefined) {
    if (key && key === ENV_CONFIG.X_APP_KEY) {
        return;
    }

    throw new Error('Access denied.');
}
