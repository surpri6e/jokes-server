export class ControllerError extends Error {
    constructor() {
        super('Объект контроллера уже был создан.');
    }
}
