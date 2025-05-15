export type Result<T, E> = Success<T> | Failure<E>;

export class Success<T> {
    readonly isSuccess = true;
    readonly isFailure = false;

    constructor(public readonly value: T) {}
}

export class Failure<E> {
    readonly isSuccess = false;
    readonly isFailure = true;

    constructor(public readonly error: E) {}
}

export const Result = {
    success: <T>(value: T): Result<T, never> => new Success(value),
    failure: <E>(error: E): Result<never, E> => new Failure(error),
};
