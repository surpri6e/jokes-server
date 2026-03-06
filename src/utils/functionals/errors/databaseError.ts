export interface IDatabaseErrorBodyConstructor {
    clue: string;
    status: number;
}

export interface IDatabaseErrorBody extends IDatabaseErrorBodyConstructor {
    message: string;
}

export class DatabaseError extends Error {
    readonly body: IDatabaseErrorBody;

    constructor(message: string, body: IDatabaseErrorBodyConstructor) {
        super(message);
        this.body = {
            message,
            ...body,
        };
    }
}
