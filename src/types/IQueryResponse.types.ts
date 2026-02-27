export interface IQueryResponse<T> {
    type: 'error' | 'good';
    message: string;
    clue: string;
    status: number;
    body: T;
}
