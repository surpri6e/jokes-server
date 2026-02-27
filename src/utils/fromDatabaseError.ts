export interface IFromDatabaseErrorBodyConstructor {
    clue: string;
    status: number;
}

export interface IFromDatabaseErrorBody extends IFromDatabaseErrorBodyConstructor {
    message: string;
}

export class FromDatabaseError extends Error {
    readonly body: IFromDatabaseErrorBody;

    constructor(message: string, body: IFromDatabaseErrorBodyConstructor) {
        super(message);
        this.body = {
            message,
            ...body,
        };
    }
}
