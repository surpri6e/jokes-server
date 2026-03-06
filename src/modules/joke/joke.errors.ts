// ARCHIVE

import { IDatabaseErrorBodyConstructor } from '../../utils/functionals/errors/databaseError';

export const NON_EXISTENT_JOKE = 'Неверно передан user_id или же шуток у данного пользователя нет.';

interface ErrorBodiesForJokeModule {
    NON_EXISTENT_JOKE: IDatabaseErrorBodyConstructor;
}

export const ERROR_BODIES_FOR_JOKE_MODULE: ErrorBodiesForJokeModule = {
    NON_EXISTENT_JOKE: {
        clue: 'Попробуйте пересмотреть user_id, который вы передаёте в функцию или же посмотреть существуют ли вообще шутки у пользователя.',
        status: 500,
    },
} as const;
