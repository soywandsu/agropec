import { HttpStatus } from "../constants";
import { DomainBaseError } from "./domain-base-error";

export class UnauthorizedError extends DomainBaseError {
    constructor(code: string, message: string) {
        super(message, code, HttpStatus.UNAUTHORIZED);
    }
}
