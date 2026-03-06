// ARCHIVE

import { IDatabaseErrorBodyConstructor } from '../../utils/functionals/errors/databaseError';

export const NON_EXISTENT_JOKE = 'Шутки с данным id не существует.';

interface ErrorBodiesForJokeModule {
    NON_EXISTENT_JOKE: IDatabaseErrorBodyConstructor;
}

export const ERROR_BODIES_FOR_JOKE_MODULE: ErrorBodiesForJokeModule = {
    NON_EXISTENT_JOKE: {
        clue: 'Пересмотрите какой id вы передаете.',
        status: 500,
    },
} as const;
