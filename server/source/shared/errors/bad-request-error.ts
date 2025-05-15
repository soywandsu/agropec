import { HttpStatus } from "../constants";
import { DomainBaseError } from "./domain-base-error";

export class BadRequestError extends DomainBaseError {
    constructor(code: string, message: string) {
        super(message, code, HttpStatus.BAD_REQUEST);
    }
}
