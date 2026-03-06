import { IDatabaseErrorBodyConstructor } from '../../utils/functionals/errors/databaseError';

export const NON_EXISTENT_USER = 'Пользователя с таким id не существует.';
export const ALREADY_EXISTENT_USER = 'Пользователь с таким id уже существует.';

interface ErrorBodiesForUserModule {
    NON_EXISTENT_USER: IDatabaseErrorBodyConstructor;
    ALREADY_EXISTENT_USER: IDatabaseErrorBodyConstructor;
}

export const ERROR_BODIES_FOR_USER_MODULE: ErrorBodiesForUserModule = {
    NON_EXISTENT_USER: {
        clue: 'Попробуйте пересмотреть id, который вы передаёте в функцию.',
        status: 500,
    },
    ALREADY_EXISTENT_USER: {
        clue: 'Возможно информация о том, что пользователь уже существует пригодится для других обработчиков.',
        status: 500,
    },
} as const;
