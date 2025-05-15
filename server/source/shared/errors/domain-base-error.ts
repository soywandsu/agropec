import { HttpStatusCode } from "../constants";

export class DomainBaseError extends Error {
    public readonly statusCode: HttpStatusCode;
    public readonly code: string;

    constructor(message: string, code: string, statusCode: HttpStatusCode) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
    }
}
