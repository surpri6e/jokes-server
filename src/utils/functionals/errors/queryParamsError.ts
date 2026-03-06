export class QueryParamsError extends Error {
    constructor() {
        super('Для поиска хотя бы одно поле должно быть заполнено.');
    }
}
